import { Vacinados } from './../../model/vacinados';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { urlService } from 'src/assets/urlService.config';

@Injectable({
  providedIn: 'root',
})
export class VacinadosCovidService {
  // private user = 'imunizacao_public';
  // private password = 'qlto5t&7r_@+#Tlstigi';

  constructor(private httpClient: HttpClient) {}

  public buscaVacinados(): Observable<any> {
    return this.httpClient
      .get(urlService.registroCovid)
      .pipe(
        map((resultadoPesquisa: any) => {
          return resultadoPesquisa.hits.hits;
        })
      );
  }
}
