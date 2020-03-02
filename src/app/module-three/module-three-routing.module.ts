import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleThreePage } from './module-three.page';

const routes: Routes = [
  {
    path: '',
    component: ModuleThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleThreePageRoutingModule {}
