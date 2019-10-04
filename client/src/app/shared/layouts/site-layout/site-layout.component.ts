import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {MaterialService} from "../../classes/material.service";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements  AfterViewInit{

// @ts-ignore
  @ViewChild('floating')floatingRef:ElementRef


links = [
  { utl: '/overview', name: 'Обзор'},
  { utl: '/analytics', name: 'Аналитика'},
  { utl: '/history', name: 'История'},
  { utl: '/order', name: 'Добавление заказа'},
  { utl: '/categories', name: 'Ассортимент'}
]
  constructor(private auth: AuthService, private router: Router) {
  }

  ngAfterViewInit() {

MaterialService.initialLizeFloatingButton(this.floatingRef)
  }

  logout(event: Event){
event.preventDefault()
this.auth.logout()
    this.router.navigate(['/login'])
  }

}
