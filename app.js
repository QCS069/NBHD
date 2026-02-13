const walletButton = document.getElementById("wallet-btn");
const form = document.getElementById("project-form");
const statusText = document.getElementById("form-status");
const projectList = document.getElementById("project-list");
const seedButton = document.getElementById("seed-btn");

const projects = [];

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(Number(value));
}

function renderProjects() {
  if (!projects.length) {
    projectList.innerHTML = `<p class="meta">No projects yet. Submit one to begin vetting.</p>`;
    return;
  }

  projectList.innerHTML = projects
    .map(
      (project) => `
        <article class="project">
          <h4>${project.projectName}</h4>
          <div class="meta">
            <span>Founder: ${project.founder}</span>
            <span>Raise: ${formatCurrency(project.raiseTarget)}</span>
            <span>FDV: ${formatCurrency(project.fdv)}</span>
          </div>
          <p class="meta">Token: ${project.tokenAddress}</p>
          <p class="meta">KYC: ${project.kycProvider} • Liquidity: ${project.liquidity}</p>
          <span class="badge ${project.statusClass}">${project.status}</span>
        </article>
      `,
    )
    .join("");
}

walletButton.addEventListener("click", () => {
  walletButton.textContent = "Wallet Connected (Demo)";
  walletButton.disabled = true;
});

seedButton.addEventListener("click", () => {
  projects.push({
    projectName: "Neighborhood Index",
    founder: "Core Team",
    raiseTarget: 750000,
    fdv: 6500000,
    tokenAddress: "NBRHDb4se58Xk5oS4L4na111111111111111111111",
    kycProvider: "SumSub",
    liquidity: "Auto-lock LP for 12 months",
    status: "Board Review In Progress",
    statusClass: "review",
  });
  renderProjects();
  seedButton.disabled = true;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  const project = {
    projectName: formData.get("projectName")?.toString().trim(),
    founder: formData.get("founder")?.toString().trim(),
    raiseTarget: Number(formData.get("raiseTarget")),
    fdv: Number(formData.get("fdv")),
    tokenAddress: formData.get("tokenAddress")?.toString().trim(),
    kycProvider: formData.get("kycProvider")?.toString(),
    liquidity: formData.get("liquidity")?.toString(),
    status: "KYC Verification Pending",
    statusClass: "pending",
  };

  projects.unshift(project);
  renderProjects();
  form.reset();
  statusText.textContent = "Submission received. Your project entered the vetting queue.";
  statusText.style.color = "#9dffc7";
});

renderProjects();
