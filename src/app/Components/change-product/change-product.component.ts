import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-change-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './change-product.component.html',
  styleUrls: ['./change-product.component.css']
})
export class ChangeProductComponent implements OnInit {
  productId: string | null = null;
  subjects: any;
  subject: any;
  categories: any = [];
  product = {
    name: '',
    description: '',
    price: 0,
    category: '',
    url: ''
  };

  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private router: Router, private data: SubjectService) { }

  ngOnInit(): void {
    // Lấy tham số ProductID từ URL
    this.route.queryParams.subscribe(params => {
      this.productId = params['ProductID'];
    });

    this.getProduct();
    this.loadCategories();
  }

  getProduct() {
    this.httpClient.get('https://665ef1a61e9017dc16f2221f.mockapi.io/products/' + this.productId).subscribe((data) => {
      this.subjects = Array.isArray(data) ? data : [data];
      this.subject = this.subjects[0];
      this.product.name = this.subject.nameProduct;
      this.product.description = this.subject.description;
      this.product.price = this.subject.priceProduct;
      this.product.category = this.subject.idCategory;
      this.product.url = this.subject.images;
    });
  }

  loadCategories() {
    this.data.getTask('Task').subscribe(res => {
      this.categories = res;
    });
  }

  itemProduct: any;
  onChange(name: string, price: number, url: string, description: string, idCategory: string) {
    this.itemProduct = {
      nameProduct: name ? name : this.subject.nameProduct,
      priceProduct: price ? price : this.subject.priceProduct,
      images: url ? url : this.subject.images,
      description: description ? description : this.subject.description,
      idCategory: idCategory ? idCategory : this.subject.idCategory
    };
    this.httpClient.put('https://665ef1a61e9017dc16f2221f.mockapi.io/products/' + this.productId, this.itemProduct).subscribe((data) => {
      this.router.navigate(['/Product']);
    });
  }
}
