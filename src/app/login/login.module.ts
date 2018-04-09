import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRouters } from './login.routes'

import { LoginComponent } from './login.component';
import { RegistComponent } from './regist/regist.component';
import { MatchingValidatorDirective } from './regist/matching-validator.directive';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRouters),
    FormsModule
  ],
  declarations: [
    LoginComponent,
    RegistComponent,
    MatchingValidatorDirective
  ]
})
export class LoginModule { }
