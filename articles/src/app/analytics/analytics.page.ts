import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.page.html',
  styleUrls: ['./analytics.page.scss'],
})
export class AnalyticsPage implements OnInit {
  avatar1 = ""
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
