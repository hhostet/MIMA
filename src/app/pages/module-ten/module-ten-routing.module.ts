import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleTenPage } from './module-ten.page';

const routes: Routes = [
  {
    path: '',
    component: ModuleTenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleTenPageRoutingModule {}
