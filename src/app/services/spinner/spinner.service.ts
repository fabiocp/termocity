import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  public spinner$: Subject<any>;

  constructor() {
    this.spinner$ = new Subject<any>();
  }

  mostrarSpinner() {
    this.spinner$.next(true);
  }

  ocultarSpinner() {
    this.spinner$.next(false);
  }
}