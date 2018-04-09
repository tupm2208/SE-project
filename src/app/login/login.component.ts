import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../core/api/login.service';

import { LoadingService } from '../core/util/loading.service';
import { StorageService } from '../core/util/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username: String;
  private password: String;
  private isRemember: Boolean;

  constructor(
    private loginService: LoginService,
    private loadingService: LoadingService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit() {

    this.isRemember = this.storageService.get('isRemember');

    if(this.isRemember) {

      this.username = this.storageService.get('username');
      this.password = this.storageService.get('password');
    }
  }

  submit() {

    this.save();

    this.loadingService.show();
    this.loginService.login({username: this.username,password: this.password}).subscribe( data => {

      console.log("data: ", data);
      this.storageService.set('token',data.token);
      this.storageService.set('id', data.ID)
      
      this.router.navigate(['/main/']);
      
      this.loadingService.hide();
    }, error => {

      this.loadingService.hide();
    })
  }

  save() {

    if(this.isRemember) {

      this.storageService.set("isRemember", true);
      this.storageService.set("username", this.username);
      this.storageService.set("password", this.password);
    } else {

      this.storageService.set("isRemember", false);
      this.storageService.set("username", '');
      this.storageService.set("password", '');
    }
  }
}
