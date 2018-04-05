import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRouters } from './login.routes'

import { LoginComponent } from './login.component';
import { RegistComponent } from './regist/regist.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRouters),
    FormsModule
  ],
  declarations: [
    LoginComponent,
    RegistComponent
  ]
})
export class LoginModule { }
