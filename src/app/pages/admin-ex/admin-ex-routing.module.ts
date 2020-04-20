import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminExPage } from './admin-ex.page';

const routes: Routes = [
  {
    path: '',
    component: AdminExPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminExPageRoutingModule {}
