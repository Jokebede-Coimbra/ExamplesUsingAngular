import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Aluno } from '../aluno';
import { Observable } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Injectable()
export class AlunoDetalheResolve implements Resolve<Aluno> {
  constructor(private alunosService: AlunosService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    console.log("AlunoDetalheResolve");
    let id = route.params['id'];
    return this.alunosService.getAluno(id);
  }
}
