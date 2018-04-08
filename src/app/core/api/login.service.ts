import { MainApiService } from './../util/main-api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor( private mainApi: MainApiService) { }

  login(params): Observable<any> {

    return this.mainApi.post('login', params);
  }

  register(params): Observable<any> {
    return this.mainApi.post('user',params);
  }
}
