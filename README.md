# ProjectPulse

**A Microsoft Fabric-powered Project Monitoring Application**

ProjectPulse is a project monitoring application designed to help organisations track project performance, budgets, milestones, risks, and progress through a centralised platform.

The project uses Microsoft Fabric as its data platform, Rayfin as the application development framework, and AI capabilities to provide intelligent project insights.

---

## 1. Project Objectives

The goal is to build a portfolio-quality application that can:

- Monitor multiple projects from one dashboard.
- Track project budgets and actual expenditure.
- Monitor milestones and project completion.
- Identify project risks and delays.
- Provide AI-generated insights and recommendations.
- Support future integration with Microsoft Business Central.

## 2. Technology Stack

| Technology | Purpose |
|---|---|
| Microsoft Fabric | Data platform and application hosting environment |
| Fabric Lakehouse | Store and organise project data |
| Rayfin | Framework and CLI for building Fabric Apps |
| React | Build the application user interface |
| TypeScript | Add type safety to application code |
| Node.js | Run JavaScript development tools |
| npm | Install and manage project dependencies |
| Git | Track changes to project files |
| GitHub | Host and manage the source code repository |
| GitHub CLI | Connect and interact with GitHub from PowerShell |
| Visual Studio Code | Main code editor |
| Claude | AI coding assistance and code review |
| Azure AI Foundry | Planned AI integration for project insights |
| Power BI Semantic Model | Planned analytics and reporting layer |

## 3. Development Environment Setup

The following tools were installed and configured before application development.

### 3.1 Node.js

**What it is:** Node.js allows JavaScript tools and development applications to run outside a web browser.

**Why it was installed:**
- Rayfin CLI requires Node.js.
- The application uses a React and TypeScript development environment.
- npm uses Node.js to install and manage dependencies.

**Version considerations:**

The computer initially had Node.js 26.13.1. However, the Rayfin CLI package declares support for Node.js 20, 22, and 24.

To avoid compatibility issues, Node Version Manager (NVM) was installed so different Node.js versions can be used without permanently removing the original version.

The project development environment was switched to Node.js 24.22.3.

### 3.2 NVM for Windows

**What it is:** Node Version Manager allows multiple Node.js versions to be installed and switched between.

**Why it was installed:**
- Keep the existing Node.js 26 installation.
- Use Node.js 24 for Rayfin compatibility.
- Make it easier to work with future projects that may require different Node.js versions.

### 3.3 npm

**What it is:** npm is the Node.js package manager.

**Why it is needed:**
- Install Rayfin and other development packages.
- Manage React, TypeScript, and application dependencies.
- Keep track of installed package versions through package files.

### 3.4 Git

**What it is:** Git is a version control system.

**Why it was installed:**
- Track changes made to ProjectPulse.
- Save development milestones through commits.
- Recover previous versions when something goes wrong.
- Maintain a clear development history.

Git was initialised in the ProjectPulse folder.

The initial project setup was committed to the repository.

### 3.5 GitHub

**What it is:** GitHub is an online platform for hosting Git repositories.

**Why it is needed:**
- Store ProjectPulse source code online.
- Maintain a remote backup of the project.
- Share the project as part of a professional portfolio.
- Support collaboration and future development.

### 3.6 GitHub CLI

**What it is:** GitHub Command Line Interface allows GitHub operations directly from PowerShell.

**Why it was installed:**
- Authenticate with GitHub.
- Manage repositories from the terminal.
- Simplify future repository operations.

GitHub CLI authentication was completed successfully.

### 3.7 Visual Studio Code

**What it is:** Visual Studio Code is the code editor used for development.

**Why it is needed:**
- Write and edit application code.
- Manage project files.
- Run PowerShell and development commands.
- Inspect and troubleshoot application errors.

### 3.8 Rayfin CLI

**What it is:** Rayfin is Microsoft's development framework and command-line tooling for building Fabric Apps.

**Why it was installed:**
- Generate the initial application structure.
- Configure the application for the Rayfin platform.
- Run the application locally.
- Connect the application to Fabric services.
- Support deployment to Microsoft Fabric.

The Rayfin CLI was installed as a development dependency.

Version installed: `1.36.2`

### 3.9 Claude AI

Claude is being used as an additional AI coding assistant.

**Why it is useful:**
- Help understand unfamiliar code.
- Review generated application code.
- Explain technical concepts.
- Assist with troubleshooting and implementation.

The free web version is being used, with code transferred manually between Claude and Visual Studio Code.

---

## 4. Installation and Setup Decisions

Some tools were deliberately not installed or configured at this stage.

| Tool / Service | Current decision | Reason |
|---|---|---|
| Docker | Not installed | Not currently required for our chosen default Fabric backend |
| Fabric workspace | Not created yet | Local application scaffolding comes first |
| Azure AI Foundry | Planned | Will be introduced during the AI development phase |
| Business Central connection | Planned | Will be added when real data sources are introduced |

These decisions help avoid unnecessary installations and costs during the early development stages.

## 5. Current Project Structure

The project is organised as follows:

```text
ProjectPulse/
│
├── app/                  # Rayfin application
│
├── data/
│   └── sample/           # Sample project data
│
├── docs/
│   └── architecture/     # Architecture documentation
│
├── scripts/              # Development and data scripts
│
├── tests/                # Application tests
│
├── CLAUDE.md             # Project instructions for AI assistance
├── README.md             # Project overview and setup documentation
├── .gitignore            # Files excluded from Git
├── package.json          # Root development dependencies
└── package-lock.json     # Locked dependency versions
```

## 6. Running the Application Locally

From the main ProjectPulse directory:

```powershell
cd .\app
npx rayfin dev
```

This starts the local development environment.

## 7. Development Roadmap

The project follows the previously agreed eight-phase roadmap:

1. Problem definition and requirements.
2. Development environment setup.
3. Data engineering and Lakehouse development.
4. Power BI semantic model.
5. AI-generated project insights.
6. Fabric App development.
7. Security, testing, and deployment.
8. Integration with real data sources, including Business Central.

## 8. Development Principles

- Follow the agreed ProjectPulse architecture.
- Build in small, testable stages.
- Document important technical decisions.
- Use sample data before connecting real business systems.
- Protect credentials and sensitive information.
- Avoid unnecessary paid services.
- Understand the code rather than simply copying it.
- Maintain Git commits at important milestones.

---

**Project status:** Development environment configured. Rayfin application successfully scaffolded. Local application startup is the next step.