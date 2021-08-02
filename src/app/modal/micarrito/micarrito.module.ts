import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MicarritoPageRoutingModule } from './micarrito-routing.module';

import { MicarritoPage } from './micarrito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MicarritoPageRoutingModule
  ],
  declarations: [MicarritoPage]
})
export class MicarritoPageModule {}
