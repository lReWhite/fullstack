import {NgModule, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import {Routes, RouterModule, Router, ActivatedRoute, Params} from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import {Subscription} from "rxjs";
import {AuthService} from "../../../../client/src/app/shared/services/auth.service";
import {MaterialService} from "../../../../client/src/app/shared/classes/material.service";

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
    RouterModule.forChild(routes)
  ],
  declarations: [LoginPage]
})
export class LoginPageModule   implements OnInit, OnDestroy{
  form: FormGroup
  aSub: Subscription

  constructor(private auth:AuthService, private router: Router, private route: ActivatedRoute ) {

  }

  ngOnInit() {
    this.form = new FormGroup({
      email:new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null , [Validators.required, Validators.minLength(6)])
    })
    this.route.queryParams.subscribe((params: Params) =>{
      if(params['registered']){
        MaterialService.toast('Теперь вы можете зайти в систему используя свои данные')

      } else if (params['accessDenied']) {
        MaterialService.toast('Для начала авторизуйтесь в системе')

      }else if(params['sessionFiled']){
        MaterialService.toast('Пожалуйста войдите в систему заного')
      }
    })
  }
  ngOnDestroy() {
    if(this.aSub){
      this.aSub.unsubscribe()
    }

  }

  onSubmit(){
    this.form.disable()

    this.aSub=this.auth.login(this.form.value).subscribe(
        () => this.router.navigate(['/overview']),
        error => {
          MaterialService.toast(error.error.message)

          this.form.enable()
        }
    )
  }


}
