import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {MaterialService} from "../classes/material.service";
import {Subscription} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})


export class RegisterPage   implements OnInit, OnDestroy {
  povar = "https://i.ibb.co/m95gzWW/depositphotos-191208722-stock-illustration-cook-chef-logo-or-label.jpg"
  form: FormGroup
  aSub: Subscription
  constructor( private auth: AuthService, private  router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      email:new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null , [Validators.required, Validators.minLength(6)])
    })
  }
  onSubmit() {
    this.form.disable()
    this.aSub =this.auth.register(this.form.value).subscribe(
        () =>{
          this.router.navigate(['/login'], {
            queryParams: {
              registered : true
            }
          })
        },
        error => {
          MaterialService.toast(error.error.message)

          this.form.enable()

        }
    )
  }
  ngOnDestroy()  {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }

}
