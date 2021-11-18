import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS, HttpHeaders
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginService} from "../services/login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('enter in interceptor', request);

    if (this.loginService.isConnected()) {
      return next.handle(request);
    } else {
      const headers = new HttpHeaders().set('Authorization', this.loginService.getData('authToken') ?? '');
      const authRequest = request.clone({headers});

      return next.handle(authRequest);
    }
  }
}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};
