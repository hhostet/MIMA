import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModulesListPage } from './modules-list.page';

const routes: Routes = [
  {
    path: '',
    component: ModulesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesListPageRoutingModule {}
