import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenService } from '../../authen.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private authenService: AuthenService,
    private route: Router
  ) {
  }
  err : any;
  onSubmit(form : NgForm){

    if (form.invalid) {
      // Kiểm tra xem form có hợp lệ hay không
      return;
    }
    if (form.value.password !== form.value.confirm_password) {
      form.controls['confirm_password'].setErrors({ 'passwordsMismatch': true });
      return; // Nếu password và confirm_password không khớp, hiển thị thông báo lỗi và dừng lại
    }
    
    this.authenService
    .register(form.value.email,form.value.password)
    .subscribe(
      (data)=>{
      this.route.navigate(['/home']);
    },
      (error)=>{
      this.err = "Invalid username or password";
    }
  )
    
  }
}
