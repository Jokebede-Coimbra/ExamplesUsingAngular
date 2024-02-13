import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  urlImagem: string = "assets/img/borboleta.jpg";
  nome: string = 'Coimbra';
  cursoAngular: boolean = true;

  nomeDoCurso: string = "Angular";
  
  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }
}
