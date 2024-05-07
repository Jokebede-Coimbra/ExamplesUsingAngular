import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConsultaCepService } from '../shared/consulta-cep.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  usuario: any = {
    nome: null,
    email: null,
  };

  constructor(private http: HttpClient, private  consultaCepService : ConsultaCepService) {}

  onSubmit(form: any) {
    console.log(form);

    this.http
      .post('https://httpbin.org/post', JSON.stringify(form.value))
      .subscribe((dados: any) => {
        console.log(dados);
        form.formulario.reset();
      });
  }
  ngOnInit() {}

  verificaValidTouched(campo: any) {
    return !campo.valid && campo.touched;
  }
  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo),
    };
  }

  consultaCEP(cep: string, formulario: any) {
    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    /*if (cep != null && cep !== '') {
      this.cepService
        .consultaCEP(cep)
        .subscribe((dados: any) => this.populaDadosForm(dados, formulario));
    }*/
  }

  populaDadosForm(
    dados: {
      logradouro: any;
      complemento: any;
      bairro: any;
      localidade: any;
      uf: any;
    },
    form: {
      formulario: {
        patchValue: (arg0: {
          endereco: {
            rua: any;
            // cep: dados.cep,
            complemento: any;
            bairro: any;
            cidade: any;
            estado: any;
          };
        }) => void;
      };
    }
  ) {
    form.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        // cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      },
    });
  }

  resetaDadosForm(form: {
    formulario: {
      patchValue: (arg0: {
        endereco: {
          rua: null;
          complemento: null;
          bairro: null;
          cidade: null;
          estado: null;
        };
      }) => void;
    };
  }) {
    form.formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null,
      },
    });
  }
}
