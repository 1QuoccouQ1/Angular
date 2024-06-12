import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenService } from '../../authen.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private authenService: AuthenService,
    private route: Router,
  ) {}
  err: any;
  onSubmit(form: NgForm) {
    this.authenService
      .login(form.value.username, form.value.password)
      .subscribe(
        (data: any) => {
          localStorage.setItem('token', data.access_token);
          this.route.navigate(['/home']);
        },
        (error ) => {
          this.err = "Invalid username or password";
        }
      );
  }
}
