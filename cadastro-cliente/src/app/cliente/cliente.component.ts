import { Component } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  // Array para armazenar os clientes
  clientes: Cliente[] = [];

  // Propriedades do formulário
  id: number | null = null;
  nome: string = '';
  email: string = '';
  idade: number | null = null;

  // Método para adicionar um cliente ao array e mostrar no console
  adicionarCliente() {
    if (this.id !== null && this.nome && this.email && this.idade !== null) {
      const cliente = new Cliente(this.id, this.nome, this.email, this.idade);
      this.clientes.push(cliente);
      console.log('Cliente adicionado:', cliente);
      
      // Limpar o formulário
      this.id = null;
      this.nome = '';
      this.email = '';
      this.idade = null;
    } else {
      console.log('Todos os campos são obrigatórios.');
    }
  }
}
