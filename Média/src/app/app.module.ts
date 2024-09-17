import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar o FormsModule

import { AppComponent } from './app.component';
import { MediaCalculadoraComponent } from './media-calculadora/media-calculadora.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaCalculadoraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Adicionar FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
