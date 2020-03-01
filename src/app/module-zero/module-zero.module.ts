import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuleZeroPageRoutingModule } from './module-zero-routing.module';

import { ModuleZeroPage } from './module-zero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuleZeroPageRoutingModule
  ],
  declarations: [ModuleZeroPage]
})
export class ModuleZeroPageModule {}
