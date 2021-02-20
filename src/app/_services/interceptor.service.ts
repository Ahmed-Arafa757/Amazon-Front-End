import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    let reqClone;
    if (token) {

      const headers = new HttpHeaders({
        authorization: token
      });
      reqClone = req.clone({ headers });
      console.log(headers);
      console.log(reqClone);

    } else {
      reqClone = req;
    }

    return next.handle(reqClone);
  }

}
