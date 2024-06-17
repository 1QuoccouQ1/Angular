import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.logout();
  }

  logout(): void {
    // Xoá access token từ local storage
    localStorage.removeItem('access_token');
    // Chuyển hướng đến trang home (ví dụ)
    this.router.navigate(['/home']);
  }
}
