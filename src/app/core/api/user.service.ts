
import { Injectable } from '@angular/core';
import { MainApiService } from './../util/main-api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor( private mainApi: MainApiService) { }

  post(params): Observable<any> {

    return this.mainApi.post('user', params);
  }
}
