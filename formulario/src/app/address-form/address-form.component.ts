import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CepService } from '../shared/cep.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css'],
})
export class AddressFormComponent {
  addressForm: any = FormGroup;
  fetchedAddress: any;

  constructor(
    private formBuilder: FormBuilder,
    private cepService: CepService
  ) {
    this.addressForm = this.formBuilder.group({
      cep: [''],
    });
  }

  fetchAddress() {
    const cep = this.addressForm.get('cep').value;
    if (cep.length === 8) {
      this.cepService.getAddressByCep(cep).subscribe((data) => {
        console.log(data);

        this.fetchedAddress = data;
      });
    }
  }
}
