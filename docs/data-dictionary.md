# ProjectPulse — Data Dictionary

**Document:** ProjectPulse Data Dictionary  
**Version:** 1.0  
**Status:** Phase 2 — Sample Data Design  
**Purpose:** Define the structure, fields, data types and relationships of the ProjectPulse data model.

---

## 1. Overview

ProjectPulse uses seven defined entities to support project monitoring, financial tracking, milestone management, risk management and project reporting.

| No. | Entity | Purpose |
|---|---|---|
| 1 | Project | Stores project information |
| 2 | ProjectBudget | Stores project budget figures |
| 3 | ProjectTransaction | Records individual project expenses |
| 4 | Milestone | Tracks project deliverables and deadlines |
| 5 | ProjectRisk | Records and monitors project risks |
| 6 | ProjectUpdate | Stores project progress reports |
| 7 | Item | General-purpose application record |

## 2. Project

**Purpose:** Stores the main information about each project.

| Field | Data type | Description |
|---|---|---|
| id | UUID | Unique project identifier |
| name | String (150) | Project name |
| code | String (50) | Unique business reference for the project |
| description | String (2000) | Project description |
| manager | String (150) | Responsible project manager |
| status | Enum | planning, active, on-hold, completed, cancelled |
| startDate | Date | Planned project start date |
| endDate | Date | Planned project end date |
| progress | Integer (0–100) | Project completion percentage |
| createdAt | Date | Record creation date |
| updatedAt | Date | Last record update date |
| owner_id | String (200) | Authenticated record owner |

## 3. ProjectBudget

**Purpose:** Stores approved, actual and forecast project expenditure.

| Field | Data type | Description |
|---|---|---|
| id | UUID | Unique budget record identifier |
| project_id | UUID | Related project identifier |
| project | Relationship | Related Project record |
| approvedBudget | Decimal | Approved project budget |
| actualSpend | Decimal | Recorded actual expenditure |
| forecastSpend | Decimal | Expected final expenditure |
| currency | String (3) | Currency code, e.g. KES or USD |
| reportingDate | Date | Date of budget reporting |
| createdAt | Date | Record creation date |
| updatedAt | Date | Last record update date |
| owner_id | String (200) | Authenticated record owner |

**Key monitoring calculations:**

- Budget utilization = Actual Spend / Approved Budget × 100
- Budget variance = Approved Budget − Actual Spend
- Forecast variance = Approved Budget − Forecast Spend

Actual spending should be reconciled against eligible project transactions to avoid inconsistent financial reporting.

## 4. ProjectTransaction

**Purpose:** Records individual financial transactions associated with a project.

| Field | Data type | Description |
|---|---|---|
| id | UUID | Unique transaction identifier |
| project_id | UUID | Related project identifier |
| project | Relationship | Related Project record |
| description | String (200) | Transaction description |
| category | Enum | materials, labour, equipment, transport, accommodation, services, other |
| amount | Decimal | Transaction amount |
| currency | String (3) | Currency code |
| transactionDate | Date | Transaction date |
| reference | String (100), optional | Invoice or payment reference |
| supplier | String (150), optional | Supplier or service provider |
| status | Enum | pending, approved, paid, cancelled |
| createdAt | Date | Record creation date |
| updatedAt | Date | Last record update date |
| owner_id | String (200) | Authenticated record owner |

**Key monitoring calculations:**

- Total paid expenditure by project.
- Expenditure by category.
- Expenditure by supplier.
- Monthly expenditure trends.
- Pending versus approved versus paid transactions.

Only transactions meeting the agreed accounting rules should contribute to actual expenditure.

## 5. Milestone

**Purpose:** Tracks important project deliverables and deadlines.

| Field | Data type | Description |
|---|---|---|
| id | UUID | Unique milestone identifier |
| project_id | UUID | Related project identifier |
| project | Relationship | Related Project record |
| name | String (150) | Milestone name |
| description | String (2000) | Milestone details |
| dueDate | Date | Expected completion date |
| status | Enum | planned, in-progress, completed, cancelled |
| progress | Integer (0–100) | Milestone completion percentage |
| createdAt | Date | Record creation date |
| updatedAt | Date | Last record update date |
| owner_id | String (200) | Authenticated record owner |

**Key monitoring calculations:**

- Completed milestones.
- Outstanding milestones.
- Overdue milestones.
- Milestone completion percentage.

## 6. ProjectRisk

**Purpose:** Records risks that could affect project delivery, cost or quality.

| Field | Data type | Description |
|---|---|---|
| id | UUID | Unique risk identifier |
| project_id | UUID | Related project identifier |
| project | Relationship | Related Project record |
| title | String (150) | Risk title |
| description | String (2000) | Risk details |
| severity | Enum | low, medium, high, critical |
| likelihood | Enum | low, medium, high |
| mitigationPlan | String (2000) | Proposed risk response |
| status | Enum | open, mitigating, accepted, closed |
| identifiedDate | Date | Date risk was identified |
| createdAt | Date | Record creation date |
| updatedAt | Date | Last record update date |
| owner_id | String (200) | Authenticated record owner |

**Key monitoring indicators:**

- Open risks.
- Critical and high-severity risks.
- Risks under mitigation.
- Risks accepted or closed.

## 7. ProjectUpdate

**Purpose:** Stores periodic project progress reports.

| Field | Data type | Description |
|---|---|---|
| id | UUID | Unique update identifier |
| project_id | UUID | Related project identifier |
| project | Relationship | Related Project record |
| title | String (150) | Report title |
| summary | String (3000) | Overall project summary |
| accomplishments | String (2000) | Work completed |
| blockers | String (2000) | Issues affecting progress |
| nextSteps | String (2000) | Planned next activities |
| reportedProgress | Integer (0–100) | Reported completion percentage |
| reportingDate | Date | Date of the report |
| createdAt | Date | Record creation date |
| updatedAt | Date | Last record update date |
| owner_id | String (200) | Authenticated record owner |

## 8. Item

**Purpose:** General-purpose record retained from the original Rayfin starter application.

| Field | Data type | Description |
|---|---|---|
| id | UUID | Unique item identifier |
| title | String (200) | Item title |
| notes | String (2000), optional | Additional notes |
| done | Boolean | Completion indicator |
| createdAt | Date | Record creation date |
| owner_id | String (200) | Authenticated record owner |

This entity is not currently part of the core project-monitoring business model.

## 9. Entity Relationships

The Project entity is the parent record for the main project-monitoring entities.

| Parent entity | Child entity | Relationship |
|---|---|---|
| Project | ProjectBudget | One project to many budget records |
| Project | ProjectTransaction | One project to many transactions |
| Project | Milestone | One project to many milestones |
| Project | ProjectRisk | One project to many risks |
| Project | ProjectUpdate | One project to many updates |

Each child record references its parent through `project_id`.

Item remains independent.

## 10. Data Quality Rules

The sample datasets must satisfy these rules:

1. Every project must have a unique ID and project code.
2. Every child record must reference an existing project.
3. Project progress must be between 0 and 100.
4. Milestone progress must be between 0 and 100.
5. Financial amounts must not be negative.
6. Currency codes must contain three characters.
7. Project end dates must not precede project start dates.
8. Completed milestones must have 100% progress.
9. Cancelled or paid transactions must follow consistent financial treatment.
10. Required fields must not be empty.
11. Dates must use consistent formats.
12. Project budget figures must reconcile with eligible transactions.

## 11. Sample Data Scenarios

The sample data must include realistic scenarios to test ProjectPulse.

| Scenario | Expected monitoring result |
|---|---|
| Project within budget | Normal budget health |
| Project exceeding budget | Budget overrun warning |
| Forecast above approved budget | Forecast risk warning |
| Milestone past due date | Overdue milestone warning |
| Project behind schedule | Schedule risk |
| Critical project risk | High-priority risk alert |
| Pending transactions | Outstanding financial commitments |
| Multiple expense categories | Category-level expenditure analysis |

## 12. Phase 2 Exit Criteria

Phase 2 will be considered complete when:

- All seven entity definitions are documented.
- Sample datasets are prepared.
- Relationships are validated.
- Sample records include delays, overruns and risks.
- Data quality checks pass.
- The datasets are ready for Fabric ingestion.

**Next phase:** Phase 3 — Fabric Lakehouse and Bronze, Silver and Gold data engineering.
