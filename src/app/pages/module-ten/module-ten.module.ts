import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuleTenPageRoutingModule } from './module-ten-routing.module';

import { ModuleTenPage } from './module-ten.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuleTenPageRoutingModule
  ],
  declarations: [ModuleTenPage]
})
export class ModuleTenPageModule {}
