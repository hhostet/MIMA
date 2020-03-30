import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleSixPage } from './module-six.page';

const routes: Routes = [
  {
    path: '',
    component: ModuleSixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleSixPageRoutingModule {}
