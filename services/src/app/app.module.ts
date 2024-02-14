import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';

import { CursosService } from './cursos/curso.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursosModule } from './cursos/cursos.module';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CriarCursoModule, CursosModule],

  // providers: [CursosService],
  providers: [LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
