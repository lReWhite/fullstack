import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddOrderPage } from './add-order.page';
import {OrderService} from "../../../../client/src/app/order-page/order.service";

const routes: Routes = [
  {
    path: '',
    component: AddOrderPage
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
  declarations: [AddOrderPage]
})
export class AddOrderPageModule {}
