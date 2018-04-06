import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ConfigService } from './../config.service';
import { HttpService } from './http.service';

@Injectable()
export class MainApiService {

  private nextLayer: any;

  constructor(private http: HttpService, private config: ConfigService) {

  }

  public get(url: string, params?: any, options?: any): Observable<any> {
  
    return this.http.get(url, params, options).map(res => {

      res = JSON.parse(res._body);
      if (res.status !== false ) {

        return res;
      } else {

        throw res;
      }
    })
  }

  public post(url: string, params: any, options?: any): Observable<any> {

    return this.http.post(url, params, options).map(res => {

      res = JSON.parse(res._body);
      if (res.status !== false ) {

        return res;
      } else {

        throw res;
      }
    });
  }

  public put(url: string, params: any, options?: any): Observable<any> {

    return this.http.put(url, params, options).map(res => {

      res = JSON.parse(res._body);
      if (res.status) {

        return res;
      } else {

        throw res;
      }
    })
  }

  public delete(url: string, params?: any, options?: any): Observable<any> {

    return this.http.delete(url, options).map(res => {

      res = JSON.parse(res._body);
      if (res.status) {

        return res;
      } else {

        throw res;
      }
    })
  }
}
