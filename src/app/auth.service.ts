import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}
  getUsername(): string | null {
    return localStorage.getItem('username');
  }
  register(userData: any) {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }
  login(userData: any) {
    return this.http.post(`${this.apiUrl}/login`, userData);
  }
  logout(): void {
    localStorage.removeItem('token');
  }
}
