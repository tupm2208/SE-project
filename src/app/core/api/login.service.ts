import { MainApiService } from './../util/main-api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StorageService } from '../util/storage.service';
import { Router, ActivatedRoute } from '@angular/router'
import { DialogService } from '../dialog/dialog.service';

@Injectable()
export class LoginService {

  constructor(
    private mainApi: MainApiService,
    private storageService: StorageService,
    private router: Router,
    private dialogService: DialogService,
    private currentRouter:ActivatedRoute
  ) { }

  login(params): Observable<any> {

    return this.mainApi.post('login', params);
  }

  forgetPassword(params): Observable<any> {
    return this.mainApi.post('forgetpassword',params);
  }


  refreshKey(): Observable<any> {

    return new Observable( observer => {

      this.mainApi.get('refreshToken?token='+this.storageService.get('token')).subscribe( data => {

        this.storageService.set('token',data.token);
        
        observer.next();
        observer.complete();
      }, error => {

        this.dialogService.showError("Your Session work is expired! goto login!").subscribe( data => {

          this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url }});
          
        })
        observer.error();
        observer.complete();
      })
    })
  }
}
