import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    // Llama al método de logout del servicio para eliminar los tokens
    this.authService.logout();
    // Redirigir al usuario a la página de inicio de sesión
    this.router.navigate(['/login']);
  }
}
