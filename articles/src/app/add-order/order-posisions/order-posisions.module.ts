import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrderPosisionsPage } from './order-posisions.page';
import {OrderService} from "../../../../../client/src/app/order-page/order.service";

const routes: Routes = [
  {
    path: '',
    component: OrderPosisionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [OrderService],
  declarations: [OrderPosisionsPage]
})
export class OrderPosisionsPageModule {}
