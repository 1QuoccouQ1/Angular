import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './change-user.component.html',
  styleUrls: ['./change-user.component.css']
})
export class ChangeUserComponent implements OnInit {
  productId: string | null = null;
  subjects: any;
  subject: any;
  product = {
    name: '',
    Email: '',
    FullName: '',
    Phone: '',
    Address: ''
  };

  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.productId = params['Userid'];
    });
    this.getProduct();
  }

  getProduct() {
    this.httpClient.get('https://665ef1a61e9017dc16f2221f.mockapi.io/User/' + this.productId).subscribe((data: any) => {
      this.subject = data;
      this.product.name = this.subject.username;
      this.product.Email = this.subject.email;
      this.product.FullName = this.subject.fullName;
      this.product.Phone = this.subject.sdt;
      this.product.Address = this.subject.Address;
    });
  }

  itemProduct: any;
  onChange(name: string, Email: string, FullName: string, Phone: string, Address: string) {
    this.itemProduct = {
      username: name ? name : this.subject.username,
      email: Email ? Email : this.subject.email,
      fullName: FullName ? FullName : this.subject.fullName,
      sdt: Phone ? Phone : this.subject.sdt,
      Address: Address ? Address : this.subject.Address
    };
    this.httpClient.put('https://665ef1a61e9017dc16f2221f.mockapi.io/User/' + this.productId, this.itemProduct).subscribe((data) => {
      this.router.navigate(['/User']);
    });
  }
}
