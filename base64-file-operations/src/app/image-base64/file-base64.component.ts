import { Component } from '@angular/core';

@Component({
  selector: 'app-file-base64',
  templateUrl: './file-base64.component.html',
  styleUrls: ['./file-base64.component.scss'],
})
export class FileBase64Component {
  imageBase64: any;

  getFile(event: any) {
    const file: File = event.target.files[0];
    this.convertImageToBase64(file);
  }

  convertImageToBase64(file: File): void {
    const reader = new FileReader();

    reader.onload = () => {
      this.imageBase64 = reader.result;
      console.log('Teste', reader.result);
    };

    reader.readAsDataURL(file);
  }
}
