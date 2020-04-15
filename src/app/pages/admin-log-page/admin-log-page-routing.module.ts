import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLogPagePage } from './admin-log-page.page';

const routes: Routes = [
  {
    path: '',
    component: AdminLogPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLogPagePageRoutingModule {}
