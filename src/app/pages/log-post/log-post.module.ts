import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogPostPageRoutingModule } from './log-post-routing.module';

import { LogPostPage } from './log-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogPostPageRoutingModule
  ],
  declarations: [LogPostPage]
})
export class LogPostPageModule {}
