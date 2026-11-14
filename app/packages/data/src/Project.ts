
import {
  date,
  entity,
  role,
  set,
  text,
  uuid,
  int,
} from '@microsoft/rayfin-core';

@entity()
@role('authenticated', '*', {
  policy: (claims, item) => claims.sub.eq(item.owner_id),
})
export class Project {
  @uuid() id!: string;

  @text({ min: 1, max: 150 }) name!: string;
  @text({ min: 1, max: 50 }) code!: string;
  @text({ max: 2000 }) description!: string;
  @text({ max: 150 }) manager!: string;

  @set('planning', 'active', 'on-hold', 'completed', 'cancelled')
  status!: 'planning' | 'active' | 'on-hold' | 'completed' | 'cancelled';

  @date() startDate!: Date;
  @date() endDate!: Date;

  @int({ min: 0, max: 100 }) progress!: number;



  @date() createdAt!: Date;
  @date() updatedAt!: Date;

  @text({ max: 200 }) owner_id!: string;
}
