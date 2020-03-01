import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleZeroPage } from './module-zero.page';

const routes: Routes = [
  {
    path: '',
    component: ModuleZeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleZeroPageRoutingModule {}
