import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      // El token existe, el usuario está autenticado
      console.log('Acceso permitido usted está autenticado enhorabuena.');
      return true;
    } else {
      // El token no existe, el usuario no está autenticado
      console.error('Acceso denegado. No estás autenticado.');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
