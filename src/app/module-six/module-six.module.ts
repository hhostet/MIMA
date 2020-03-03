import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuleSixPageRoutingModule } from './module-six-routing.module';

import { ModuleSixPage } from './module-six.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuleSixPageRoutingModule
  ],
  declarations: [ModuleSixPage]
})
export class ModuleSixPageModule {}
