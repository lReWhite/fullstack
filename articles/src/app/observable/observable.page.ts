import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-observable',
  templateUrl: './observable.page.html',
  styleUrls: ['./observable.page.scss'],
})
export class ObservablePage implements OnInit {
  povar = "https://i.ibb.co/m95gzWW/depositphotos-191208722-stock-illustration-cook-chef-logo-or-label.jpg"
  constructor(private menu: MenuController,
              private router: Router) {

  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  ngOnInit() {

  }


}
