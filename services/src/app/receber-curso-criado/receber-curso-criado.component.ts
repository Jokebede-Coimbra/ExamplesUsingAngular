import { Component } from '@angular/core';
import { CursosService } from '../cursos/curso.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent {

  curso!: string;

  constructor(private cursosService:CursosService){}

  ngOnInit() {
    this.cursosService.emitirCursoCriado.subscribe(data => this.curso = data);
    
  }
}
