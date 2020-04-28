import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleEightPage } from './module-eight.page';

const routes: Routes = [
  {
    path: '',
    component: ModuleEightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleEightPageRoutingModule {}
