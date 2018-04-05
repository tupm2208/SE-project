import { Injectable } from '@angular/core';
import {
  Http,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  Headers,
  Request,
  Jsonp
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from './../config.service';

@Injectable()
export class HttpService {

  constructor(private http: Http, private config: ConfigService) { }

  /**
   * Performs any type of http request.
   * @param url
   * @param options
   * @returns {Observable<Response>}
   */
  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.request(url, options);
  }

  /**
   * Performs a request with `get` http method.
   * @param url
   * @param options
   * @returns {Observable<>}
   */
  public get(url: string, params?: any, options?: RequestOptionsArgs): Observable<any> {
    let fullUrl: string = this.getFullUrl(url) + this.serializeData(params);
    return this.http.get(fullUrl);
  }

  /**
   * Performs a request with `post` http method.
   * @param url
   * @param params
   * @param options
   * @returns {Observable<>}
   */
  public post(url: string, params: any, options?: RequestOptionsArgs): Observable<any> {
    console.log("for post: ", url);
    return this.http.post(
      this.getFullUrl(url),
      this.serializeData(params),
      this.requestOptions(options)
    );
  }

  public put(url: string, params: any, options?: any): Observable<any> {
    return this.http.put(
      this.getFullUrl(url),
      this.serializeData(params),
      this.requestOptions(options)
    );
  }

  public delete(url: string, params?: any, options?: any): Observable<any> {
    return this.http.delete(
      this.getFullUrl(url),
      this.requestOptions(options)
    );
  }


  /**
   * Performs a request with `post` http method.
   * @param url
   * @param params
   * @param options
   * @returns {Observable<>}
   */
  public uploadBlob(url: string, params: FormData, options?: RequestOptionsArgs): Observable<any> {
    return this.http.post(
      this.getFullUrl(url),
      params
    );
  }

  /**
   * Build API url.
   * @param url
   * @returns {string}
   */
  private getFullUrl(url: string): string {
    return this.config.getBaseURL() + url;
  }

  private responseInterceptor(): void {
    console.log('Request Complete');
    // this.loaderService.hidePreloader();
  }

  private serializeData(data): string {
    // If this is not an object, defer to native stringification.
    if (!this.isObject(data)) {
      return ((data == null) ? "" : data.toString());
    }
    let buffer = [];
    // Serialize each key in the object.
    for (let name in data) {
      if (!data.hasOwnProperty(name)) {
        continue;
      }
      let value = data[name];
      buffer.push(
        encodeURIComponent(name) + "=" + encodeURIComponent((value == null) ? "" : value)
      );
    }
    // Serialize the buffer and clean it up for transportation.
    let source = buffer.join("&").replace(/%20/g, "+");
    // console.log("serializeData", source);
    return (source);
  }

  private isObject(x: any): x is Object {
    return x != null && typeof x === 'object';
  }

  /**
   * Request options.
   * @param options
   * @returns {RequestOptionsArgs}
   */
  private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      });
    }
    return options;
  }
}
