import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRouters } from './login.routes'

import { LoginComponent } from './login.component';
import { RegisterComponent } from './register/register.component';
import { MatchingValidatorDirective } from './register/matching-validator.directive';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRouters),
    FormsModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    MatchingValidatorDirective
  ]
})
export class LoginModule { }
