import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated = false;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // Thêm logic xác thực thực tế
    if (username === 'admin' && password === 'admin') {
      this.authenticated = true;
      localStorage.setItem('auth', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    this.authenticated = false;
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.authenticated || localStorage.getItem('auth') === 'true';
  }
}