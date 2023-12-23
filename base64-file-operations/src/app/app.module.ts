import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileBase64Component } from './image-base64/file-base64.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Base64ImageComponent } from './base64-image/base64-image.component';
@NgModule({
  declarations: [
    AppComponent,
    FileBase64Component,
    Base64ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
