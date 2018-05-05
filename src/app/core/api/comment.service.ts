import { Injectable } from '@angular/core';
import { MainApiService } from './../util/main-api.service';
import { Observable } from 'rxjs/Observable';
import { StorageService } from '../util/storage.service';

@Injectable()
export class CommentService {

  constructor( 
      private mainApi: MainApiService,
      private storageService: StorageService
    ) { }

    post(params): Observable<any> {
        params.token = this.storageService.get('token');
        return this.mainApi.post('comment/', params);
    }

    delete(id): Observable<any> {
        let token = this.storageService.get('token');
        return this.mainApi.delete('comment/'+id + '?token=' + token);
    }

    put(params): Observable<any> {
        params.token = this.storageService.get('token');
        return this.mainApi.put('comment',params);
    }
}
