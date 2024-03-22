import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css'],
})
export class AlunoDetalheComponent {
  aluno!: Aluno;
  inscricao!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) {}

  ngOnInit() {
    /* this.inscricao = this.route.params.subscribe((params) => {
      let id = params['id'];
      this.aluno = this.alunosService.getAluno(id);
    });
    */
   console.log("ngOnInit: AlunoDetalheComponent");


    this.inscricao = this.route.data.subscribe((data) => {
      console.log(data);
      console.log("Recebendo o obj Aluno do resolver");
      this.aluno = data['aluno'];
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }
}
