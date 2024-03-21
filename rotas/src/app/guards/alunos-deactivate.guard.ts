import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { IFormCanDeactivate } from './iform-candeactivate';

@Injectable()
export class AlunosDeactivateGuard
  implements CanDeactivate<IFormCanDeactivate>
{
  canDeactivate(
    component: IFormCanDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('guarda de desativação');
    return component.podeDesativar ? component.podeDesativar() : true;
  }
}
