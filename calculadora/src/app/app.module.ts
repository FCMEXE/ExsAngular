import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar o FormsModule

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Adicionar FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
