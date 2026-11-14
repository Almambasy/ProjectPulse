
# ProjectPulse – Project Instructions

## 1. Project Overview

ProjectPulse is a full Microsoft Fabric project monitoring application.

The application will help organizations monitor:
- Project progress and completion.
- Planned versus actual expenditure.
- Budget utilization and overruns.
- Activities, milestones and delays.
- Project risks.
- AI-generated project insights and recommendations.

The project is intended to be a professional portfolio application and a practical learning project.

## 2. Agreed Architecture

Our established architecture:

- Microsoft Fabric as the data platform.
- Fabric Lakehouse: LH_ProjectPulse.
- Medallion architecture: Bronze, Silver and Gold.
- Fabric SQL database for application data.
- Fabric Apps using the Rayfin framework.
- TypeScript and React for the application interface.
- Power BI semantic model for analytical reporting.
- Azure AI Foundry for AI-powered insights.
- Business Central as a future financial data source.

Do not replace these technologies or redesign the architecture without discussing the reasons and obtaining approval.

## 3. Development Decisions

- Build the full application.
- Start with realistic sample data.
- Integrate AI early.
- Keep the solution modular and scalable.
- Validate every phase before progressing.
- Document important technical decisions.

## 4. Development Roadmap

### Phase 1: Problem Definition and Requirements
- Business problem.
- Target users.
- Functional requirements.
- Application modules.
- Data requirements.

Status: Agreed.

### Phase 2: Development Environment
- Configure VS Code.
- Configure Node.js and npm.
- Configure Git.
- Configure Claude Code.
- Prepare the project structure.

Status: In progress.

### Phase 3: Data Engineering
- Generate realistic sample data.
- Create LH_ProjectPulse.
- Implement Bronze ingestion.
- Build Silver transformations.
- Build Gold analytical tables.
- Validate data quality.

### Phase 4: Semantic Model
- Design relationships.
- Create measures.
- Define project KPIs.
- Validate analytical results.

### Phase 5: AI Insights
- Integrate Azure AI Foundry.
- Generate project risk insights.
- Identify budget overruns.
- Generate recommendations.
- Explain AI outputs.

### Phase 6: Fabric App
- Build the application interface.
- Create project monitoring screens.
- Connect application services to Fabric.
- Display KPIs and project insights.
- Implement user interactions.

### Phase 7: Security and Testing
- Authentication and authorization.
- Data access controls.
- Functional testing.
- Data validation.
- Performance testing.
- Deployment preparation.

### Phase 8: Real Data Sources
- Integrate Microsoft Dynamics 365 Business Central.
- Replace sample financial data progressively.
- Validate actual versus planned expenditure.
- Prepare for production usage.

## 5. Application Modules

The application should include:

1. Executive Overview.
2. Project Portfolio.
3. Project Details.
4. Budget Monitoring.
5. Milestone Tracking.
6. Risk Management.
7. AI Insights.
8. Reports and Analytics.

## 6. Development Rules

- Explain every technical step in simple language.
- Never invent Microsoft Fabric features, APIs or configuration options.
- Check official documentation when necessary.
- Never generate code without explaining where it belongs.
- Use maintainable, modular code.
- Do not hardcode credentials.
- Use environment variables for secrets.
- Validate each implementation.
- Never silently change the approved architecture.
- Do not recreate work that has already been completed.

## 7. Working Method

Work as my senior technical architect and development partner.

I am learning while building this application.

For every development task:
1. Explain the objective.
2. Explain the architecture involved.
3. Identify the files to create or modify.
4. Provide implementation.
5. Explain how to execute it.
6. Test and validate.
7. Document the result.

Always distinguish between completed, proposed and untested functionality.

## 8. Current Progress

- Project folder created.
- VS Code configured.
- Node.js installed.
- npm installed.
- Git installed.
- Git repository initialized.
- Initial commit created.
- Claude Code extension installed.

Current working directory:

C:\AHMED FILES\DP-600\ProjectPulse

Next objective:

Complete Claude Code authentication and inspect the existing development environment. Continue from Phase 2.

Do not restart Phase 1 or ask me to redesign the existing project.
