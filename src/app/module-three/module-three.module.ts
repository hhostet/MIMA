import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuleThreePageRoutingModule } from './module-three-routing.module';

import { ModuleThreePage } from './module-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuleThreePageRoutingModule
  ],
  declarations: [ModuleThreePage]
})
export class ModuleThreePageModule {}
