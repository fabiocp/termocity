import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, Input, Renderer2, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { CidadeComponent } from '../cidade/cidade.component';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})


export class LayoutComponent {
  
  @ViewChild("container", { read: ViewContainerRef }) container: ViewContainerRef|undefined;
  @Input() carregou: boolean = false;

  lstCidades = [
    {id: "chapeco", descricao:"Chapecó-SC"},
    {id: "london", descricao:"Londres - Inglaterra"},
    {id: "paris", descricao:"Paris - França"},
    {id: "berlin", descricao:"Berlin - Alemanha"}
  ];

  constructor(private resolver: ComponentFactoryResolver){}

   onClickCidade(cidade: any){
    this.carregou = false;

    setTimeout(() => {
      this.criarCidadeComponente(cidade);
    }, 200);

  }  
  criarCidadeComponente(cidade: any) {
    if (!this.container)
      return;  

    if (this.container.length)
      this.container.remove(0);

    const componentFactory = this.resolver.resolveComponentFactory(CidadeComponent);
    const component = this.container.createComponent(componentFactory);
    component.instance.Inicializar(cidade, this.actCarregou.bind(this));  
  }

  private actCarregou(){
    this.carregou = true;
  }

}
