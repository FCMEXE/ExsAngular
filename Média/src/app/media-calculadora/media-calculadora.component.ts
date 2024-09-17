import { Component } from '@angular/core';

@Component({
  selector: 'app-media-calculadora',
  templateUrl: './media-calculadora.component.html',
  styleUrls: ['./media-calculadora.component.css']
})
export class MediaCalculadoraComponent {
  ac1: number | null = null;
  ac2: number | null = null;
  ag: number | null = null;
  af: number | null = null;
  media: number | null = null;
  resultado: string | null = null;

  calcularMedia(): void {
    if (this.ac1 === null || this.ac2 === null || this.ag === null || this.af === null) {
      this.media = null;
      this.resultado = 'Preencha todos os campos.';
      return;
    }

    this.media = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);
    this.resultado = this.media >= 5 ? 'Aprovado' : 'Reprovado';
  }
}
