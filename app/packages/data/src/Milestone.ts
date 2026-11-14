
import {
  date,
  entity,
  int,
  one,
  role,
  set,
  text,
  uuid,
} from '@microsoft/rayfin-core';

import { Project } from './Project.js';

@entity()
@role('authenticated', '*', {
  policy: (claims, item) => claims.sub.eq(item.owner_id),
})
export class Milestone {
  @uuid() id!: string;

  @uuid() project_id!: string;
  @one(() => Project) project!: Project;

  @text({ min: 1, max: 150 }) name!: string;
  @text({ max: 2000 }) description!: string;

  @date() dueDate!: Date;

  @set('planned', 'in-progress', 'completed', 'cancelled')
  status!: 'planned' | 'in-progress' | 'completed' | 'cancelled';

  @int({ min: 0, max: 100 }) progress!: number;

  @date() createdAt!: Date;
  @date() updatedAt!: Date;

  @text({ max: 200 }) owner_id!: string;
}
