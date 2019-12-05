import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrderCategoriesPage } from './order-categories.page';
import {OrderService} from "../../../../../client/src/app/order-page/order.service";

const routes: Routes = [
  {
    path: '',
    component: OrderCategoriesPage
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
  declarations: [OrderCategoriesPage]
})
export class OrderCategoriesPageModule {}
