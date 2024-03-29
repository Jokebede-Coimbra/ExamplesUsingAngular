import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css'],
})
export class DiretivaNgifComponent {
  cursos: String[] = ['Angular', 'Java', 'JS', 'Python'];
  mostrarCursos: boolean = false;

  ngOnInit() {}

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
