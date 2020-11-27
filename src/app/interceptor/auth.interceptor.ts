import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class AuthInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedReq = req.clone({
      headers: req.headers.set('api_key', '01424f8ebe495e0900a4e99eebd5324c')
    });
    return next.handle(clonedReq);
  }
}
