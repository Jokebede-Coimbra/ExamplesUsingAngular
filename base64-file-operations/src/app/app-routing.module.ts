import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Base64FileComponent } from './base64-file/base64-file.component';
import { FileBase64Component } from './file-base64/file-base64.component';

const routes: Routes = [
  {path: 'basefile', component: Base64FileComponent},
  {path: 'filebase', component: FileBase64Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
