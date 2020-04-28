import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuleEightPageRoutingModule } from './module-eight-routing.module';

import { ModuleEightPage } from './module-eight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuleEightPageRoutingModule
  ],
  declarations: [ModuleEightPage]
})
export class ModuleEightPageModule {}
