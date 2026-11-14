
import {
  date,
  entity,
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
export class ProjectRisk {
  @uuid() id!: string;

  @uuid() project_id!: string;
  @one(() => Project) project!: Project;

  @text({ min: 1, max: 150 }) title!: string;
  @text({ max: 2000 }) description!: string;

  @set('low', 'medium', 'high', 'critical')
  severity!: 'low' | 'medium' | 'high' | 'critical';

  @set('low', 'medium', 'high')
  likelihood!: 'low' | 'medium' | 'high';

  @text({ max: 2000 }) mitigationPlan!: string;

  @set('open', 'mitigating', 'accepted', 'closed')
  status!: 'open' | 'mitigating' | 'accepted' | 'closed';

  @date() identifiedDate!: Date;
  @date() createdAt!: Date;
  @date() updatedAt!: Date;

  @text({ max: 200 }) owner_id!: string;
}
