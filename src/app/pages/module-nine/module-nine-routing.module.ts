import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleNinePage } from './module-nine.page';

const routes: Routes = [
  {
    path: '',
    component: ModuleNinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleNinePageRoutingModule {}
