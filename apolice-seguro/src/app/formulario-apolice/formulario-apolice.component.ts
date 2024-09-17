import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-apolice',
  templateUrl: './formulario-apolice.component.html',
  styleUrls: ['./formulario-apolice.component.css']
})
export class FormularioApoliceComponent {
  nome: string = ''; // Inicializa a propriedade com uma string vazia
  sexo: string = ''; // Inicializa a propriedade com uma string vazia
  idade: number | null = null; // Inicializa com null, já que é um número
  valorAutomovel: number | null = null; // Inicializa com null
  valorApolice: number | null = null; // Inicializa com null

  calcularApolice(): void {
    if (this.sexo === 'masculino') {
      if (this.idade !== null && this.idade <= 25) {
        this.valorApolice = this.valorAutomovel! * 0.15;
      } else if (this.idade !== null && this.idade > 25) {
        this.valorApolice = this.valorAutomovel! * 0.10;
      }
    } else if (this.sexo === 'feminino') {
      this.valorApolice = this.valorAutomovel! * 0.08;
    }
  }
}
