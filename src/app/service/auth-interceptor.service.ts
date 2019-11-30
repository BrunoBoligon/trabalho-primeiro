import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.authService.isUserAuth()){
            let authRequest = request.clone({
                headers: request.headers.set("Authorization",
                 "Bearer " + this.authService.getUserToken())
            })
        }else{
            return next.handle(request)
        }
    }
}
