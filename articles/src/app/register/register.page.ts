import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {MaterialService} from "../classes/material.service";
import {Subscription} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})


export class RegisterPage   implements OnInit, OnDestroy {
  povar = "https://i.ibb.co/m95gzWW/depositphotos-191208722-stock-illustration-cook-chef-logo-or-label.jpg"
  form: FormGroup
  aSub: Subscription
  error1: string
  constructor( private auth: AuthService, private  router: Router,public toastController: ToastController) { }

  ngOnInit() {
    this.form = new FormGroup({
      email:new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null , [Validators.required, Validators.minLength(6)])
    })
  }
  onSubmit() {

    this.aSub =this.auth.register(this.form.value).subscribe(
        () =>{
          this.router.navigate(['/login'], {
            queryParams: {
              registered : true
            }
          })
        },
        error => {
          this.error1 = error.error.message
          this.presentToast()
        }

    )
  }
  ngOnDestroy()  {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: this.error1,
      duration: 2000
    });
    toast.present();
  }

}
