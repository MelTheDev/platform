//
// Copyright © 2020 Anticrm Platform Contributors.
// 
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// 
// See the License for the specific language governing permissions and
// limitations under the License.
//

import type { Doc } from '@anticrm/core'

import StringEditor from './components/StringEditor.svelte'
import StringPresenter from './components/StringPresenter.svelte'
import BooleanEditor from './components/BooleanEditor.svelte'
import StatePresenter from './components/StatePresenter.svelte'
import TableView from './components/TableView.svelte'
import KanbanView from './components/KanbanView.svelte'

import { getClient } from '@anticrm/presentation'

async function Delete(object: Doc): Promise<void> {
  const client = getClient()
  await client.removeDoc(object._class, object.space, object._id)
}

export default async () => ({
  actionImpl: {
    Delete
  },
  component: {
    StringEditor,
    StringPresenter,
    BooleanEditor,
    StatePresenter,
    TableView,
    KanbanView
  },
})
