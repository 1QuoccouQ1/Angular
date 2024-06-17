// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  
  
  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    const jwtHelper = new JwtHelperService();
      if(token === null)
    return false;
    return !jwtHelper.isTokenExpired(token);
    }
    

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  // Các phương thức khác như login, logout, isAuthenticated...
}
