import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuleFourPageRoutingModule } from './module-four-routing.module';

import { ModuleFourPage } from './module-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuleFourPageRoutingModule
  ],
  declarations: [ModuleFourPage]
})
export class ModuleFourPageModule {}
