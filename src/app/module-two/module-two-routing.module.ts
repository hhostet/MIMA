import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleTwoPage } from './module-two.page';

const routes: Routes = [
  {
    path: '',
    component: ModuleTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleTwoPageRoutingModule {}
