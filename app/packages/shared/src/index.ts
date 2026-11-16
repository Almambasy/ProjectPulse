
/**
 * Browser-safe contracts shared by the data registration package and frontend.
 *
 * Keep each record shape aligned with its decorated runtime entity in
 * `@rayfin-app/data`. This package must stay isomorphic, so do not import the decorated classes here.
 */

export interface ItemRecord {
  id: string;
  title: string;
  notes?: string;
  done: boolean;
  createdAt: Date;
  owner_id: string;
}

export interface ProjectRecord {
  id: string;
  name: string;
  code: string;
  description: string;
  manager: string;
  status: 'planning' | 'active' | 'on-hold' | 'completed' | 'cancelled';
  startDate: Date;
  endDate: Date;
  progress: number;
  createdAt: Date;
  updatedAt: Date;
  owner_id: string;
}

export interface ProjectBudgetRecord {
  id: string;
  project_id: string;
  project: ProjectRecord;
  approvedBudget: number;
  actualSpend: number;
  forecastSpend: number;
  currency: string;
  reportingDate: Date;
  createdAt: Date;
  updatedAt: Date;
  owner_id: string;
}

export interface MilestoneRecord {
  id: string;
  project_id: string;
  project: ProjectRecord;
  name: string;
  description: string;
  dueDate: Date;
  status: 'planned' | 'in-progress' | 'completed' | 'cancelled';
  progress: number;
  createdAt: Date;
  updatedAt: Date;
  owner_id: string;
}

export interface ProjectRiskRecord {
  id: string;
  project_id: string;
  project: ProjectRecord;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  likelihood: 'low' | 'medium' | 'high';
  mitigationPlan: string;
  status: 'open' | 'mitigating' | 'accepted' | 'closed';
  identifiedDate: Date;
  createdAt: Date;
  updatedAt: Date;
  owner_id: string;
}

export interface ProjectUpdateRecord {
  id: string;
  project_id: string;
  project: ProjectRecord;
  title: string;
  summary: string;
  accomplishments: string;
  blockers: string;
  nextSteps: string;
  reportedProgress: number;
  reportingDate: Date;
  createdAt: Date;
  updatedAt: Date;
  owner_id: string;
}

export interface ProjectTransactionRecord {
  id: string;
  project_id: string;
  project: ProjectRecord;
  description: string;
  category:
    | 'materials'
    | 'labour'
    | 'equipment'
    | 'transport'
    | 'accommodation'
    | 'services'
    | 'other';
  amount: number;
  currency: string;
  transactionDate: Date;
  reference?: string;
  supplier?: string;
  status: 'pending' | 'approved' | 'paid' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
  owner_id: string;
}

export type UniversalAppSchema = {
  Item: ItemRecord;
  Project: ProjectRecord;
  ProjectBudget: ProjectBudgetRecord;
  Milestone: MilestoneRecord;
  ProjectRisk: ProjectRiskRecord;
  ProjectUpdate: ProjectUpdateRecord;
  ProjectTransaction: ProjectTransactionRecord;
};
