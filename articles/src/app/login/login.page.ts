import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../../../client/src/app/shared/services/auth.service";
import {MaterialService} from "../../../../client/src/app/shared/classes/material.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {


}
