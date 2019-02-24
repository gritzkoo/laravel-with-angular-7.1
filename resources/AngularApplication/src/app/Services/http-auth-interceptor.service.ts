import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = 'xx.yy.zz';
    const authorized = req.clone({
      setHeaders: {
        Autorization: `Barer ${token}`
      }
    });
    return next.handle(authorized);
  }
}
