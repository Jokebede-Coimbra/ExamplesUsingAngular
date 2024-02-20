import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

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
    url: 'https://www.amazon.com.br',
  };

  filtro!: string;

  livros: string[] = ['Java', 'Angular2'];

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000);
  });

  valorAsync2 = new Observable<string>(observable => {
    setTimeout(() => {
      observable.next('Valor assíncrono 2');
    }, 2000);
  });

  addCurso(valor: string) {
    this.livros.push(valor);
    console.log(this.livros);
  }


  obterCursos() {
    if (
      this.livros.length === 0 ||
      this.filtro === undefined ||
      this.filtro.trim() === ''
    ) {
      return this.livros;
    }

    return this.livros.filter((v) =>
      v.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase())
    );
  }
  ngOnInit() {
  }
}
