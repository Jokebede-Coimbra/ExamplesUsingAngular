import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';
import { AlunosGuard } from '../guards/alunos.guard';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';
import { AlunoDetalheResolve } from './guards/aluno-detalhe.resolve';

const alunosRoutes: Routes = [
  {
    path: '',
    component: AlunosComponent,
    canActivateChild: [AlunosGuard],
    children: [
      { path: 'novo', component: AlunoFormComponent },
      {
        path: ':id',
        component: AlunoDetalheComponent,
        resolve: { aluno: AlunoDetalheResolve },
      },
      {
        path: ':id/editar',
        component: AlunoFormComponent,
        canDeactivate: [AlunosDeactivateGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule],
})
export class AlunosRoutingModule {}
