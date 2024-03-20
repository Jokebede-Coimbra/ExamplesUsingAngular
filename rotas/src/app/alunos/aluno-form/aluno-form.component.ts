import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css'],
})
export class AlunoFormComponent {
  aluno: any = {};
  inscricao!: Subscription;
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) {}

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

  podeDesativar() {
    return this.podeMudarRota();
  }
}
