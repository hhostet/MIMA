import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuleTwoPageRoutingModule } from './module-two-routing.module';

import { ModuleTwoPage } from './module-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuleTwoPageRoutingModule
  ],
  declarations: [ModuleTwoPage]
})
export class ModuleTwoPageModule {}
