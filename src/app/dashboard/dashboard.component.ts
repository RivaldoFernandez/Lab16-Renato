import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string = ''; 

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Obtener el nombre del usuario desde el AuthService (ejemplo simulado)
    this.username = this.authService.getUsername() || 'Usuario Invitado';
  }

  logout(): void {
    this.authService.logout();
    console.log('Sesión cerrada correctamente.');
    this.router.navigate(['/login']);
  }

  navigateToStats(): void {
    console.log('Navegando a la sección de estadísticas...');
    this.router.navigate(['/stats']);
  }

  navigateToSettings(): void {
    console.log('Navegando a la configuración...');
    this.router.navigate(['/settings']);
  }

  navigateToSupport(): void {
    console.log('Navegando a soporte...');
    this.router.navigate(['/support']);
  }
}
