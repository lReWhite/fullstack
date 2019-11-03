import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.page.html',
  styleUrls: ['./menu-example.page.scss'],
})
export class MenuExamplePage {
    povar = "https://i.ibb.co/m95gzWW/depositphotos-191208722-stock-illustration-cook-chef-logo-or-label.jpg"
  constructor(private menu: MenuController) { }

    openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

    openEnd() {
    this.menu.open('end');
  }

 openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }


}
