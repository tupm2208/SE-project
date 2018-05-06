import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../core/api/login.service';
import { LoadingService } from '../../core/util/loading.service';
import { DialogService } from '../../core/dialog/dialog.service'

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['../login.component.css','./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {

  private email: String;
  private message: String;
  constructor( 
    private loginService: LoginService,
    private loadingService: LoadingService,
    private dialog: DialogService,
    private router: Router) { }

  ngOnInit() {
  }

  submit() {
    var param = {
      email: this.email
    }
    this.loadingService.show();
    this.loginService.forgetPassword(param)
      .subscribe( data => {

        this.loadingService.hide();
        var message = data.message ? data.message : "Please check your email. The new password has been sent to you";
        this.dialog.showSuccess(message).subscribe( data => {
          this.router.navigate(['/login']);
        })
      }, err => {
        this.loadingService.hide();
        this.message = (err.message) ? err.message : "Cannot perform action"
      })
  }

}
