import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { SpinnerService } from '../services/spinner/spinner.service';

@Injectable()
export class RequisicaoInterceptor implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.mostrarSpinner();

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.spinnerService.ocultarSpinner();      
        }
        return event;
      }),
      catchError((error: any, caught: Observable<any>) => {
        this.spinnerService.ocultarSpinner();      
        alert(error.message);
        return error;
      })
    );
  }
}
