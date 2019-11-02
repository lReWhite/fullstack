import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-observable',
  templateUrl: './observable.page.html',
  styleUrls: ['./observable.page.scss'],
})
export class ObservablePage implements OnInit {

  constructor(private menuCtrl: MenuController,
              private router: Router) {

  }

  ngOnInit() {

  }
  openMenu() {
    this.menuCtrl.enable(true, 'menuA')
        .then(myMenu => {
          // console.log(myMenu);
          this.menuCtrl.open('menuA');
        });
  }

}
