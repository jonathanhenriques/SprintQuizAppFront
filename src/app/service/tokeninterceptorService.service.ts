import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../usuario/model/Usuario';
import { TokenService } from './token.service';


const UNAUTHORIZED = 401
const FORBIDDEN = 403

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private tokenService: TokenService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    console.error(this.tokenService.retornaToken())
    // const token = JSON.parse(this.tokenService.retornaToken());
    const token = this.tokenService.retornaToken();
    // const token = environment?.token
    // if (token) {
    if (this.tokenService.possuiToken) {
      console.warn('possui - ' + token)
      // if(req.body instanceof HttpRequest)
      //   console.log('sim')
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      const dupReq = req.clone({

        headers: req.headers.set('Authorization', `Bearer ${this.tokenService.retornaToken()}`)
      });
      console.warn('intercept - ' + token)
    }






    if (req.responseType)
      return next.handle(req)
        .pipe(
          map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              if (event.status == UNAUTHORIZED || event.status == FORBIDDEN) {
                console.warn('limpando token!!!!!!')
                environment.token = '';
                this.tokenService.excluirToken()
              }
            }
            return event;
          }))

  }






  // intercept(
  //   request: HttpRequest<any>,
  //   next: HttpHandler, ): Observable<HttpEvent<any>> {
  //   const dupReq = request.clone({

  //     headers: request.headers.set('Authorization', `Bearer ${this.tokenService.retornaToken()}`)
  //   });
  //   return next.handle(dupReq);
  // }
}
// }