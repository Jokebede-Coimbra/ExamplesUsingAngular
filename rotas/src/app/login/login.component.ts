import { AuthService } from './auth.service';
import { Usuario } from './usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //usuario!: Usuario;
  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  fazerLogin() {
    console.log(this.usuario);
    this.authService.fazerLogin(this.usuario);
  }
}
