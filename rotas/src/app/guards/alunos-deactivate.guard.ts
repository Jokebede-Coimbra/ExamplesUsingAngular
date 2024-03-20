import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AlunosDeactivateGuard
  implements CanDeactivate<AlunoFormComponent>
{
  canDeactivate(
    component: AlunoFormComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Aqui você pode implementar a lógica para verificar se pode ou não desativar a rota
    // Por exemplo, pode verificar se o formulário do aluno está sujo (alterado) e perguntar ao usuário se deseja sair sem salvar
    // Se a rota puder ser desativada, retorne true, caso contrário, retorne false ou uma Promise/Observable que resolva para false
    console.log('guarda de desativação');
    return component.podeDesativar? component.podeDesativar(): true;
  }
}
