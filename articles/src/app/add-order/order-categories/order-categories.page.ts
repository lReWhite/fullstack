import { Component, OnInit } from '@angular/core';
import {Category} from "../../../../../client/src/app/shared/iterfaces";
import {Observable} from "rxjs";
import {CategoriesService} from "../../../../../client/src/app/shared/services/categories.service";

@Component({
  selector: 'app-order-categories',
  templateUrl: './order-categories.page.html',
  styleUrls: ['./order-categories.page.scss'],
})
export class OrderCategoriesPage implements OnInit {

  categories$:  Observable<Category[]>
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    // @ts-ignore
    this.categories$ =this.categoriesService.fetch()
  }

}
