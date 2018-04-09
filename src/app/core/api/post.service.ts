import { Injectable } from '@angular/core';
import { MainApiService } from './../util/main-api.service';
import { Observable } from 'rxjs/Observable';
import { StorageService } from '../util/storage.service';

@Injectable()
export class PostService {

  constructor(
    private mainApi: MainApiService,
    private storageService: StorageService
  ) { }

  list(page): Observable<any> {

    return this.mainApi.get('post/10/' + page );
  }

  getById(id): Observable<any> {

    return this.mainApi.get('post/'+id);
  }

  post(params): Observable<any> {

    params.token = this.storageService.get('token');

    return this.mainApi.post('post/', params);
  }

  edit(params): Observable<any> {

    params.token = this.storageService.get('token');

    return this.mainApi.put('post/', params);
  }

  search(params): Observable<any> {

    params.token = this.storageService.get('token');

    return this.mainApi.post('post/search', params);
  }
}
