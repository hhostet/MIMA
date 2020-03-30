import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuleSevenPageRoutingModule } from './module-seven-routing.module';

import { ModuleSevenPage } from './module-seven.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuleSevenPageRoutingModule
  ],
  declarations: [ModuleSevenPage]
})
export class ModuleSevenPageModule {}
