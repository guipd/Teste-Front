import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { VacinadosCovidComponent } from './shared/vacinados-covid/vacinados-covid.component';

@NgModule({
  declarations: [AppComponent, VacinadosCovidComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
