import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuleNinePageRoutingModule } from './module-nine-routing.module';

import { ModuleNinePage } from './module-nine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuleNinePageRoutingModule
  ],
  declarations: [ModuleNinePage]
})
export class ModuleNinePageModule {}
