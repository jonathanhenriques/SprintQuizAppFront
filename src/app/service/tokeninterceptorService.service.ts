import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


const UNAUTHORIZED = 401
const FORBIDDEN = 403

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): any{
    const token = environment?.token
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
  

  if(req.responseType)
    return next.handle(req)
    .pipe(
      map((event: HttpEvent<any>) => {
        if(event instanceof HttpResponse){
          if(event.status == UNAUTHORIZED || event.status == FORBIDDEN) {
            console.warn('limpando token!!!!!!')
            environment.token = '';
          }
        }
        return event;
      }))
    
    }






  // intercept(
  //   request: HttpRequest<any>,
  //   next: HttpHandler, ): Observable<HttpEvent<any>> {
  //   const dupReq = request.clone({

  //     headers: request.headers.set('Authorization', `Bearer ${environment.token}`)
  //   });
  //   return next.handle(dupReq);
  // }
}