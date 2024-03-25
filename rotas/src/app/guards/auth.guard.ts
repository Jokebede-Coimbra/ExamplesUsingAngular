import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> |Promise<boolean>| boolean {
    console.log('CanLoad: verificando se usuários pode carregar o cód módulo');
    return this.verificarAcesso();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log('AuthGuard');

    return this.verificarAcesso();
  }

  private verificarAcesso() {
    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
