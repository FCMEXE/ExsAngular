import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; // Importe o RouterModule

import { AppComponent } from './app.component';
import { FormularioApoliceComponent } from './formulario-apolice/formulario-apolice.component';

// Defina suas rotas, se houver
const routes: Routes = [
  { path: '', component: FormularioApoliceComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormularioApoliceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes) // Configure o RouterModule com suas rotas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
