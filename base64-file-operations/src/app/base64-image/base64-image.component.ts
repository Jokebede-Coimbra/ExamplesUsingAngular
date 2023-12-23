import { Component } from '@angular/core';

@Component({
  selector: 'app-base64-image',
  templateUrl: './base64-image.component.html',
  styleUrls: ['./base64-image.component.scss']
})
export class Base64ImageComponent {

  base64Image: any;

  convertBase64ToImage() {
    const image = new Image();
    image.src = 'data:image/png;base64,' + this.base64Image;

    const container = document.getElementById('imageContainer');
    if (container) {
      container.appendChild(image);
    } else {
      console.error('Elemento imageContainer não encontrado');
    }
  }
}
