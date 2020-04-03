import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogPostPage } from './log-post.page';

const routes: Routes = [
  {
    path: '',
    component: LogPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogPostPageRoutingModule {}
