import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment'

@Injectable({
  providedIn: 'root'
})
export class WheaterAPIService {

  constructor(private http : HttpClient) { }

  ObterTemperaturaAtual(cidade: string): Observable<any>{   
    return this.http.get(this.montarUrl(environment.urlTemperaturaAtual, cidade));
  }

  ObterPrevisaoProximosdias(cidade: string): Observable<any>{   
    return this.http.get(this.montarUrl(environment.urlTemperaturaPrevisao, cidade));
  }

  private montarUrl(urlTemplate: string, cidade: string): string{
    return urlTemplate.replace('{cidade}', cidade).replace('{apiKey}', environment.apiKey);
  }
}
