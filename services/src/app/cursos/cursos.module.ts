import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosService } from './curso.service';
import { CursosComponent } from './cursos.component';





@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CursosComponent],
  providers: [CursosService],
})
export class CursosModule { }
