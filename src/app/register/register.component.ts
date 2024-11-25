import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerData = {
    username: '',
    password: '',
  };
  constructor(private router: Router, private authService: AuthService) {}
  
  ngOnInit(): void {}
  register() {
    this.authService.register(this.registerData).subscribe(
      (success) => console.log('success', success),
      (error) => console.log('error', error)
    );
  }
  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
