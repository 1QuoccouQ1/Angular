import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectService } from '../../services/subject.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  subjects: any;
  nameTable: any;
  categories: any = [];
  product = {
    name: '',
    description: '',
    price: 0,
    category: '',
    url: ''
  };

  constructor(private subject: SubjectService, protected httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.subject.getTask('Task').subscribe(res => {
      this.categories = res;
    });
  }

  
  itemProduct: any;
  onCreate(form: NgForm) {
    if (form.valid) {
      this.itemProduct = {
        nameProduct: form.value.name,
        priceProduct: form.value.price,
        description: form.value.description,
        idCategory: form.value.category,
        url: form.value.url
      };
      this.httpClient.post('https://665ef1a61e9017dc16f2221f.mockapi.io/products/', this.itemProduct).subscribe((data) => {
        this.router.navigate(['/Product']);
      });
    }
  }
}
