import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  redirectToDashboard(): void {
    console.log('Redirigiendo al Dashboard...');
    this.router.navigate(['/dashboard']);
  }

  redirectToFeature(feature: string): void {
    console.log(`Redirigiendo a la sección de ${feature}...`);
    this.router.navigate([`/${feature}`]);
  }
}
