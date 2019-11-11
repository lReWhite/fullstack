import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";
import {Router} from "@angular/router";
import {Category} from "../../../../client/src/app/shared/iterfaces";
import {Observable} from "rxjs";
import {CategoriesService} from "../services/categories.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  povar = "https://i.ibb.co/m95gzWW/depositphotos-191208722-stock-illustration-cook-chef-logo-or-label.jpg"
  categories$: Observable<Category[]>
  constructor(private menu: MenuController,
              private CategoriesService: CategoriesService,
              private router: Router) {

  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  ngOnInit() {
    this.categories$ = this.CategoriesService.fetch()
  }

}
