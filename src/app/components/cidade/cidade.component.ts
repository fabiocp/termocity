import { APP_ID, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { WheaterAPIService } from 'src/app/services/wheater-api/wheater-api.service';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent {
  private callbackSucesso!: () => void;
  private cidade: any;
  @Input() nome: string|undefined;
  @Input() temperaturaAtual: string|undefined;
  @Input() tempoAtual: string|undefined;
  @Input() previsoes: Array<any>|undefined;  

  constructor(private api: WheaterAPIService){}

  Inicializar(cidade: any, callbackSucesso: () => void){
    this.cidade = cidade;
    this.callbackSucesso = callbackSucesso;

    this.nome = cidade.descricao;

    this.chamarObterTemperaturaAtual();
  }

  private chamarObterTemperaturaAtual(){
    
    this.api.ObterTemperaturaAtual(this.cidade.id).subscribe(
      res => {
        this.carregarTemperaturaAtual(res);
        this.chamarObterPrevisaoProximosdias();
      }
    );
  }

  private chamarObterPrevisaoProximosdias(){
    this.api.ObterPrevisaoProximosdias(this.cidade.id).subscribe(
      res => {
         this.carregarPrevisoes(res);
         this.callbackSucesso();
      }
    )
  }


  carregarTemperaturaAtual(res: any) {
    this.temperaturaAtual = res.main.temp;
    this.tempoAtual = res.weather[0].description;
  }

  private carregarPrevisoes(res: any){
    this.previsoes = (res.list as Array<any>)
      .filter(x => x.dt_txt.indexOf(' 12:00:00') != -1)
      .map(x => ({dia: this.formatarData(x.dt_txt), temperatura: x.main.temp, tempo: x.weather[0].description}))
      .slice(0, 4);
  }

  private formatarData(dataStr: string): string{
    let date = new Date(dataStr);
    let mes = date.getMonth() + 1;
    let dia = date.getDate();

    return dia.toString().padStart(2, "0") + "/" + mes.toString().padStart(2, "0");    
  }

}
