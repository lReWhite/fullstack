import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {AuthService} from "../services/auth.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

import {MaterialService} from "../classes/material.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnDestroy, OnInit{
povar = "https://i.ibb.co/m95gzWW/depositphotos-191208722-stock-illustration-cook-chef-logo-or-label.jpg"

    form: FormGroup
    aSub: Subscription

    constructor(private auth:AuthService, private router: Router, private route: ActivatedRoute) {}

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

        this.aSub= this.auth.login(this.form.value).subscribe(
            () => this.router.navigate(['/observable']),
            error => {
                MaterialService.toast(error.error.message)
                this.form.enable()

            }
        )
    }

}
