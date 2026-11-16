
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
//        Licensed under the MIT license. See LICENSE file in the project root
//        for full license information.
// </copyright>
//-----------------------------------------------------------------------


import { Item } from './Item.js';
import { Project } from './Project.js';
import { ProjectBudget } from './ProjectBudget.js';
import { Milestone } from './Milestone.js';
import { ProjectRisk } from './ProjectRisk.js';
import { ProjectUpdate } from './ProjectUpdate.js';
import { ProjectTransaction } from './ProjectTransaction.js';

import type { UniversalAppSchema } from '@rayfin-app/shared';

/**
 * The app's Rayfin data schema.
 */
export type { UniversalAppSchema };

export {
  Item,
  Project,
  ProjectBudget,
  Milestone,
  ProjectRisk,
  ProjectUpdate,
  ProjectTransaction,
};

export const schema = [
  Item,
  Project,
  ProjectBudget,
  Milestone,
  ProjectRisk,
  ProjectUpdate,
  ProjectTransaction,
];
