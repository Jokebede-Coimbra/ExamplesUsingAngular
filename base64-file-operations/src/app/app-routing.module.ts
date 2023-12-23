import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileBase64Component } from './image-base64/file-base64.component';
import { Base64ImageComponent } from './base64-image/base64-image.component';

const routes: Routes = [
  {path: 'filebase', component: FileBase64Component},
  {path: 'baseimage', component: Base64ImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
