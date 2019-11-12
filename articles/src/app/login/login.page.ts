import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";

import {ActivatedRoute, Params, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {MaterialService} from "../classes/material.service";
import {ToastController} from "@ionic/angular";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnDestroy, OnInit{
povar = "https://i.ibb.co/m95gzWW/depositphotos-191208722-stock-illustration-cook-chef-logo-or-label.jpg"

    form: FormGroup
    aSub: Subscription
error1: string
    constructor(private auth:AuthService, private router: Router, private route: ActivatedRoute,
                public toastController: ToastController) {}



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

        this.aSub= this.auth.login(this.form.value).subscribe(
            () =>{

                this.router.navigate(['/observable'])},
            error => {
                this.error1 = error.error.message



            }
        )
    }
    async presentToast() {
        const toast = await this.toastController.create({
            message: this.error1,
            duration: 2000
        });
        toast.present();
    }









}
