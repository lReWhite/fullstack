import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../service/authion.service";
import {MaterialService} from "../../../../client/src/app/shared/classes/material.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy{

form : FormGroup

  constructor(private auth:AuthService, private router: Router, private route: ActivatedRoute) {

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



  }

  onSubmit(){

  }

}

