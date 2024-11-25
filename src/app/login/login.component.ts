import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {}

  login(): void {
    this.auth.login(this.loginData).subscribe(
      (response: any) => {
        if (!localStorage.getItem('token')) {
          localStorage.setItem('token', response.token);
        }

        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error en el inicio de sesión:', error);
      }
    );
  }
  redirectToRegister(){
    this.router.navigate(['/register']);
  }
}

