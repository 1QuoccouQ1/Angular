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
    this.authenService
    .register(form.value.email,form.value.password)
    .subscribe(
      (data)=>{
      // console.log(data);
      this.route.navigate(['/home']);
    },
      (error)=>{
      this.err = "Invalid username or password";
    }
  )
    
  }
}
