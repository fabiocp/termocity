import { Component, Input } from '@angular/core';

import { SpinnerService } from '../../services/spinner/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarSpinner: boolean = false;
  title = 'termocity';
  
  constructor(private spinnerService: SpinnerService){
    this.spinnerService.spinner$.subscribe((exibir: boolean) => {
      setTimeout(() => {
        this.mostrarSpinner = exibir;
      });
    });
  }
}
