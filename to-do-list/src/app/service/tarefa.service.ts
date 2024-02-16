import { Observable } from 'rxjs';
import { Tarefa } from './../model/tarefa';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  baseUrl = 'http://localhost:3600/tarefas';

  listaTarefa: Tarefa[] = [];

  constructor(private http: HttpClient) {}

  adicionar(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.baseUrl, tarefa);
  }

  listar() {}

  deletar(id: number) {}
}
