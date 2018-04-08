import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../core/api/login.service';
import { LoadingService } from '../../core/util/loading.service';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['../login.component.css']
})
export class RegistComponent implements OnInit {
  
  private fullname: String;
  private email: String;
  private username: String;
  private password: String;
  private confirmPassword: String;
  private message: String;
  constructor(
    private loginService: LoginService,
    private loadingService: LoadingService) 
    {}

  ngOnInit() {
    
  }

  submit() {
      var userInfo = {
        name: this.fullname,
        email: this.email,
        username: this.username,
        password: this.password
      }

      this.loadingService.show();
      this.loginService.register(userInfo).subscribe( data => {
          
          this.loadingService.hide();
      }, err => {
          this.message = err.message;
          this.loadingService.hide();
      })
  }

}
