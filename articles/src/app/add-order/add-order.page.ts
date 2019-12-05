import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MenuController} from "@ionic/angular";
import {NavigationEnd, Router} from "@angular/router";
import {MaterialInstance, MaterialService} from "../../../../client/src/app/shared/classes/material.service";
import {Subscription} from "rxjs";
import {OrderService} from "../../../../client/src/app/order-page/order.service";
import {OrdersService} from "../../../../client/src/app/shared/services/orders.service";
import {Order, OrderPosition} from "../../../../client/src/app/shared/iterfaces";

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.page.html',
  styleUrls: ['./add-order.page.scss'],
  providers: [OrderService]
})
export class AddOrderPage implements OnInit,OnDestroy,AfterViewInit {
  // @ts-ignore
  @ViewChild('modal') modalRef: ElementRef
  isRoot: boolean
  oSub: Subscription
  modal: MaterialInstance
  pending: boolean = false



 povar = "https://i.ibb.co/m95gzWW/depositphotos-191208722-stock-illustration-cook-chef-logo-or-label.jpg"
  constructor(private menu: MenuController,
              private router: Router,
              private order: OrderService,
              private ordersService: OrdersService) {

  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  ngOnInit() {

    this.isRoot = false
    this.isRoot = this.router.url === '/order'
    this.router.events.subscribe(event =>{

      if (event instanceof NavigationEnd){
        this.isRoot = this.router.url === '/order'
      }

    })
  }
  ngOnDestroy() {
    this.modal.destroy()
    if (this.oSub){
      this.oSub.unsubscribe()
    }
  }
  ngAfterViewInit(){

    this.modal= MaterialService.initModal(this.modalRef)
  }
  removePosition(orderPosition: OrderPosition){
    this.order.remove(orderPosition)
  }
  open(){
    this.modal.open()
  }
  cancel(){
    this.modal.close()
  }
  submit(){
    this.pending = true
    const  order: Order = {
      list: this.order.list.map( item => {
        delete item._id
        return item
      })
    }

     this.ordersService.create(order).subscribe(
        newOrder => {
          MaterialService.toast(`Заказ №${newOrder.order} был добавлен`)
          this.order.clear()
        },
        error => MaterialService.toast(error.error.message),
        ()    => {
          this.modal.close()
          this.pending= false
        }
    )
  }

}
