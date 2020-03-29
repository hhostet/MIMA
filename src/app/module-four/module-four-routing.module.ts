import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleFourPage } from './module-four.page';

const routes: Routes = [
  {
    path: '',
    component: ModuleFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleFourPageRoutingModule {}
