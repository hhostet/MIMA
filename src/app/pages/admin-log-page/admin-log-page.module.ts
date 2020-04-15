import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminLogPagePageRoutingModule } from './admin-log-page-routing.module';

import { AdminLogPagePage } from './admin-log-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminLogPagePageRoutingModule
  ],
  declarations: [AdminLogPagePage]
})
export class AdminLogPagePageModule {}
