import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './change-task.component.html',
  styleUrl: './change-task.component.css'
})
export class ChangeTaskComponent {
  productId: string | null = null;
  subjects: any;
  subject: any;
  product = {
    name: '',
  };

  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.productId = params['Userid'];
    });
    this.getProduct();
  }

  getProduct() {
    this.httpClient.get('https://66667131a2f8516ff7a36663.mockapi.io/Task/' + this.productId).subscribe((data: any) => {
      this.subject = data;
      this.product.name = this.subject.TaskName;
    });
  }

  itemProduct: any;
  onChange(name: string) {
    this.itemProduct = {
      TaskName: name ? name : this.subject.username,
    };
    this.httpClient.put('https://66667131a2f8516ff7a36663.mockapi.io/Task/' + this.productId, this.itemProduct).subscribe((data) => {
      this.router.navigate(['/Task']);
    });
  }
}
