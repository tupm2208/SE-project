import { Injectable } from '@angular/core';
import { MainApiService } from './../util/main-api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {

  constructor( private mainApi: MainApiService) { }

  list(): Observable<any> {

    return this.mainApi.get('post');
  }
}
