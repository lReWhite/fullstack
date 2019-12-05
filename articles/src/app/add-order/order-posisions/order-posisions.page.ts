import { Component, OnInit } from '@angular/core';
import {Position} from "../../../../../client/src/app/shared/iterfaces";
import {Observable} from "rxjs";
import {PositionsService} from "../../../../../client/src/app/shared/services/positions.service";
import {OrderService} from "../../../../../client/src/app/order-page/order.service";
import {ActivatedRoute, Params} from "@angular/router";
import {map, switchMap} from "rxjs/operators";
import {MaterialService} from "../../../../../client/src/app/shared/classes/material.service";

@Component({
  selector: 'app-order-posisions',
  templateUrl: './order-posisions.page.html',
  styleUrls: ['./order-posisions.page.scss'],
})
export class OrderPosisionsPage implements OnInit {

  postitions$: Observable<Position[]>
  constructor(private route: ActivatedRoute,
              private positionsService: PositionsService,
              private order: OrderService) { }

  ngOnInit() {

    this.postitions$ = this.route.params
        .pipe(
            switchMap(
                (params: Params) =>{
                  return this.positionsService.fetch(params['id'])
                }
            ),
            map(
                (postitons: Position[])=>{
                  return postitons.map(position => {
                    position.quantity = 1
                    return position
                  })
                }
            )

        )
  }
  addToOrder(position: Position){
    MaterialService.toast(`Добавлено х${position.quantity}`)
    this.order.add(position)
  }

}
