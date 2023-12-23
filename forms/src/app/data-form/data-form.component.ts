import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
})
export class DataFormComponent implements OnInit {
  formulario: FormGroup | any;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    /* this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),
    })*/
    this.formulario = this.formBuilder.group({
        nome: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        idade: [null, Validators.min(18)]
    });
  }

  onSubmit() {
    console.log(this.formulario.value);
  }
}
