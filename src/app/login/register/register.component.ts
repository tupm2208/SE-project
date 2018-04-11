import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../core/api/user.service';
import { LoadingService } from '../../core/util/loading.service';
import { DialogService } from '../../core/dialog/dialog.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login.component.css']
})
export class RegisterComponent implements OnInit {
  
  private fullname: String;
  private email: String;
  private username: String;
  private password: String;
  private confirmPassword: String;
  private message: String;
  constructor(
    private loginService: UserService,
    private loadingService: LoadingService,
    private dialog: DialogService,
    private router: Router
  ) {}

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
      this.loginService.post(userInfo).subscribe( data => {
          
          this.loadingService.hide();

          this.dialog.showSuccess("Your account has been created. Please login now").subscribe( data => {

            this.router.navigate(['/login']);
          })
      }, err => {
          this.message = err.message;
          this.loadingService.hide();
      })
  }

}
