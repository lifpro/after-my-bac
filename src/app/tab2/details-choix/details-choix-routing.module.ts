import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsChoixPage } from './details-choix.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsChoixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsChoixPageRoutingModule {}
