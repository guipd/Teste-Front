import { Vacinados } from './../model/vacinados';
import { Component, OnInit } from '@angular/core';
import { VacinadosCovidService } from './service/vacinados-covid.service';

@Component({
  selector: 'app-vacinados-covid',
  templateUrl: './vacinados-covid.component.html',
  styleUrls: ['./vacinados-covid.component.scss'],
})
export class VacinadosCovidComponent implements OnInit {
  public listVacinados = new Array<Vacinados>();
  public mostrarItens: boolean = false
  constructor(private vacinadosServices: VacinadosCovidService) {}

  ngOnInit(): void {
    this.vacinadosServices.buscaVacinados().subscribe((resp) => {
      console.log(resp);
      this.listVacinados = resp;
    });
  }

  public maisInfos() {
    this.mostrarItens = true;
  }

  public carregarMais(){
    
  }
}
