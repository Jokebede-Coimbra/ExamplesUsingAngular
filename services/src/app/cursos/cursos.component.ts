import { Component } from '@angular/core';
import { CursosService } from './curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent {
  cursos: string[] = [];

  constructor(private cursosService: CursosService) {}

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    this.cursosService.emitirCursoCriado.subscribe((x) => console.log(x));
    CursosService.criouNovoCurso.subscribe((x) => this.cursos.push(x));
  }
}
