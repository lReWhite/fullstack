import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";
import {Router} from "@angular/router";
import {OverviewPage} from "../../../../client/src/app/shared/iterfaces";
import {Observable} from "rxjs";

@Component({
  selector: 'app-observable',
  templateUrl: './observable.page.html',
  styleUrls: ['./observable.page.scss'],
})
export class ObservablePage implements OnInit {
  povar = "https://i.ibb.co/m95gzWW/depositphotos-191208722-stock-illustration-cook-chef-logo-or-label.jpg"

   d = new Date()
  constructor(private menu: MenuController,
              private router: Router) {

  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  ngOnInit() {
    // Today!
    this.d.setDate(this.d.getDate() - 1); // Yesterday!


  }


}
