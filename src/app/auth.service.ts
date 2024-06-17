// src/app/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  
  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    // Kiểm tra token có tồn tại và có giá trị hợp lệ
    console.log('token', token);
    return !!token;
  }
  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  // Các phương thức khác như login, logout, isAuthenticated...
}
