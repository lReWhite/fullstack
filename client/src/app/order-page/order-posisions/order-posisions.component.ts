import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PositionsService} from "../../shared/services/positions.service";
import {Observable} from "rxjs";
import {Position} from "../../shared/iterfaces";
import {map, switchMap} from "rxjs/operators";
import {OrderService} from "../order.service";
import {MaterialService} from "../../shared/classes/material.service";

@Component({
  selector: 'app-order-posisions',
  templateUrl: './order-posisions.component.html',
  styleUrls: ['./order-posisions.component.css']
})
export class OrderPosisionsComponent implements OnInit {
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
