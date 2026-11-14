
import {
  date,
  decimal,
  entity,
  one,
  role,
  text,
  uuid,
} from '@microsoft/rayfin-core';

import { Project } from './Project.js';

@entity()
@role('authenticated', '*', {
  policy: (claims, item) => claims.sub.eq(item.owner_id),
})
export class ProjectBudget {
  @uuid() id!: string;

  @uuid() project_id!: string;
  @one(() => Project) project!: Project;

  @decimal() approvedBudget!: number;
  @decimal() actualSpend!: number;
  @decimal() forecastSpend!: number;

  @text({ min: 3, max: 3 }) currency!: string;

  @date() reportingDate!: Date;
  @date() createdAt!: Date;
  @date() updatedAt!: Date;

  @text({ max: 200 }) owner_id!: string;
}
