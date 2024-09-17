import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  num1: number | null = null;
  num2: number | null = null;
  operacao: string = '+';
  resultado: number | null = null;

  calcular(): void {
    if (this.num1 === null || this.num2 === null) {
      this.resultado = null;
      return;
    }

    switch (this.operacao) {
      case '+':
        this.resultado = this.num1 + this.num2;
        break;
      case '-':
        this.resultado = this.num1 - this.num2;
        break;
      case '*':
        this.resultado = this.num1 * this.num2;
        break;
      case '/':
        this.resultado = this.num2 !== 0 ? this.num1 / this.num2 : null;
        break;
      default:
        this.resultado = null;
    }
  }
}
