import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { IFormCanDeactivate } from 'src/app/guards/iform-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css'],
})
export class AlunoFormComponent implements IFormCanDeactivate {
  aluno: any = {};
  inscricao!: Subscription;
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) {}
  podeDesativar() {
    return this.podeMudarRota();
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params) => {
      let id = params['id'];
      this.aluno = this.alunosService.getAluno(id);

      if (this.aluno == null) {
        this.aluno = {};
      }
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
  onInput() {
    this.formMudou = true;
    console.log('mudou');
  }

  podeMudarRota() {
    if (this.formMudou) {
      return confirm('Tem certeza que deseja sair dessa página?');
    }
    return false;
  }
}
