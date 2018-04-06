import { Injectable } from '@angular/core';
import { MainApiService } from './../util/main-api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {

  constructor( private mainApi: MainApiService) { }

  list(page): Observable<any> {

    return this.mainApi.get('post?page=' + page);
  }

  getById(id): Observable<any> {

    return this.mainApi.get('post/'+id);
  }
}
