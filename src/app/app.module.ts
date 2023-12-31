import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { TelaPrincipalComponent } from './components/tela-principal/tela-principal.component';
import { CidadeComponent } from './components/cidade/cidade.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { RequisicaoInterceptor } from './interceptors/requisicao.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TelaPrincipalComponent,
    CidadeComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequisicaoInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
