import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectService } from '../../services/subject.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  subjects: any;
  nameTable: any;
  product = {
    name: '',
    Email: '',
    FullName: '',
    Phone: '',
    Address: ''
  };

  User: any = 'products';
  constructor(private subject: SubjectService, protected httpClient: HttpClient, private router: Router) { }

  ngOnInit() { }

  itemProduct: any;
  onCreate(form: NgForm) {
    if (form.valid) {
      this.itemProduct = {
        username: form.value.name,
        email: form.value.email,
        fullName: form.value.fullName,
        sdt: form.value.phone,
        Address: form.value.address
      };
      this.httpClient.post('https://665ef1a61e9017dc16f2221f.mockapi.io/User/', this.itemProduct).subscribe((data) => {
        this.router.navigate(['/User']);
      });
    }
  }
}
