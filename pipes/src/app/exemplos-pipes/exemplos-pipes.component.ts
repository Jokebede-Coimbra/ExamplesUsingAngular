import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css'],
})
export class ExemplosPipesComponent {

  livro: any = {
    titulo: 'Refatoração',
    rating: 4.9,
    numeroPaginas: 456,
    preco: 82.49,
    dataLancamento: new Date(2020, 4, 30),
    url: 'https://www.amazon.com.br'
  };

}
