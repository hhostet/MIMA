import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminExPageRoutingModule } from './admin-ex-routing.module';

import { AdminExPage } from './admin-ex.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminExPageRoutingModule
  ],
  declarations: [AdminExPage]
})
export class AdminExPageModule {}
