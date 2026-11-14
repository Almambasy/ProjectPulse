
import {
  date,
  entity,
  int,
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
export class ProjectUpdate {
  @uuid() id!: string;

  @uuid() project_id!: string;
  @one(() => Project) project!: Project;

  @text({ min: 1, max: 150 }) title!: string;
  @text({ max: 3000 }) summary!: string;
  @text({ max: 2000 }) accomplishments!: string;
  @text({ max: 2000 }) blockers!: string;
  @text({ max: 2000 }) nextSteps!: string;

  @int({ min: 0, max: 100 }) reportedProgress!: number;

  @date() reportingDate!: Date;
  @date() createdAt!: Date;
  @date() updatedAt!: Date;

  @text({ max: 200 }) owner_id!: string;
}
