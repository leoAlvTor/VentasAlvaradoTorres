import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MicarritoPage } from './micarrito.page';

const routes: Routes = [
  {
    path: '',
    component: MicarritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MicarritoPageRoutingModule {}
