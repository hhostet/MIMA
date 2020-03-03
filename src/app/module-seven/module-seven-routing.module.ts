import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleSevenPage } from './module-seven.page';

const routes: Routes = [
  {
    path: '',
    component: ModuleSevenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleSevenPageRoutingModule {}
