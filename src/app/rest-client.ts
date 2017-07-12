import {Resource} from 'ngx-resource';

import {Observable} from 'rxjs/Observable';

import {Subscriber} from 'rxjs/Subscriber';


export class RestClient extends Resource {

  /*
  getHeaders(methodOptions?: any): any {
    let headers: any = {};

    if (methodOptions.auth) {
      headers.Authorization = localStorage.get('token');
    }

    return headers;
  }
*/

  getUrl(methodOptions?: any): string | Promise<string> {
    let resPath = super.$getUrl();
    return 'https://www.amr.org.ar/AutorizadorWeb/api/v3/' + resPath;
  }
/*
  responseInterceptor(observable: Observable<any>, request?: Request): Observable<any> {

    return Observable.create((subscriber: Subscriber<any>) => {

      observable.subscribe(
        (res: Response) => {
          if (res.headers) {
            let newToken: string = res.headers.get('Authorization');
            if (newToken) {
              localStorage.setItem('token', newToken);
            }
          }
          subscriber.next((<any>res)._body ? res.json().then((data : any)=>data = ) : null);
        },
        (error: Response) => {
          // I also made a layer to parse errors
          subscriber.error(new Error(error.statusText));
        },
        () => subscriber.complete()
      );

    });
  }
  */
}
