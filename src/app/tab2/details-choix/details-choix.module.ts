import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsChoixPageRoutingModule } from './details-choix-routing.module';

import { DetailsChoixPage } from './details-choix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsChoixPageRoutingModule
  ],
  declarations: [DetailsChoixPage]
})
export class DetailsChoixPageModule {}
