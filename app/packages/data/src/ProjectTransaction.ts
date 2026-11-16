
import {
  date,
  decimal,
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
export class ProjectTransaction {
  @uuid() id!: string;

  @uuid() project_id!: string;
  @one(() => Project) project!: Project;

  @text({ min: 1, max: 200 }) description!: string;

  @set(
    'materials',
    'labour',
    'equipment',
    'transport',
    'accommodation',
    'services',
    'other',
  )
  category!:
    | 'materials'
    | 'labour'
    | 'equipment'
    | 'transport'
    | 'accommodation'
    | 'services'
    | 'other';

  @decimal() amount!: number;
  @text({ min: 3, max: 3 }) currency!: string;

  @date() transactionDate!: Date;

  @text({ optional: true, max: 100 }) reference?: string;
  @text({ optional: true, max: 150 }) supplier?: string;

  @set('pending', 'approved', 'paid', 'cancelled')
  status!: 'pending' | 'approved' | 'paid' | 'cancelled';

  @date() createdAt!: Date;
  @date() updatedAt!: Date;

  @text({ max: 200 }) owner_id!: string;
}
