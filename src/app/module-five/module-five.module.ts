import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuleFivePageRoutingModule } from './module-five-routing.module';

import { ModuleFivePage } from './module-five.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuleFivePageRoutingModule
  ],
  declarations: [ModuleFivePage]
})
export class ModuleFivePageModule {}
