import {NgModule, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Routes, RouterModule, Router, ActivatedRoute, Params} from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import {Subscription} from "rxjs";


import {HttpClient, HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
     IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule  {


}
