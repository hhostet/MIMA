import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModulesListPageRoutingModule } from './modules-list-routing.module';

import { ModulesListPage } from './modules-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModulesListPageRoutingModule
  ],
  declarations: [ModulesListPage]
})
export class ModulesListPageModule {}
