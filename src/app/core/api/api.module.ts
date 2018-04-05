import { UtilModule } from './../util/util.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginService } from './login.service';
import { UserService } from './user.service';
import { PostService } from './post.service';


@NgModule({
  imports: [
    CommonModule,
    UtilModule
  ],
  declarations: [],
  providers: [
    LoginService,
    UserService,
    PostService
  ]
})
export class ApiModule {}
