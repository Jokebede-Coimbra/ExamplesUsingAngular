import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormModule } from './template-form/template-form.module';
import { HttpClient } from '@angular/common/http';
import { DataFormModule } from './data-form/data-form.module';
import { AddressFormComponent } from './address-form/address-form.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { CepService } from './shared/cep.service';


@NgModule({
  declarations: [AppComponent, AddressDetailsComponent, AddressFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TemplateFormModule,
    ReactiveFormsModule,
    DataFormModule
  ],
  providers: [HttpClient, CepService],
  bootstrap: [AppComponent],
})
export class AppModule {}
