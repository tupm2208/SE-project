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

  getByCategory(params): Observable<any> {
    return this.mainApi.get('post/10/'+ params.page + "?category=" + params.categoryID);
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

  delete(id): Observable<any> {

    let token = this.storageService.get('token');

    return this.mainApi.delete('post/'+id + '?token=' + token);
  }
}
