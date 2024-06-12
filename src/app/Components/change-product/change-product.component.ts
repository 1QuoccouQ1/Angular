import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-change-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './change-product.component.html',
  styleUrl: './change-product.component.css'
})
export class ChangeProductComponent implements OnInit{
  productId: string | null = null;
  subjects : any;
  subject : any;
  product = {
    name: '',
    description: '',
    price: 0,
    idCategory: '',
    image: null,
    url: ''
  };
  constructor(private route: ActivatedRoute , private httpClient : HttpClient, private router : Router) { }

  ngOnInit(): void {
    // Lấy tham số ProductID từ URL
    this.route.queryParams.subscribe(params => {
      this.productId = params['ProductID'];
    });

    this.getProduct();
  }

  getProduct() {
    this.httpClient.get('https://665ef1a61e9017dc16f2221f.mockapi.io/products/' + this.productId).subscribe((data) => {
      this.subjects = Array.isArray(data) ? data : [data];
      this.subject = this.subjects[0];
    });
  }

  itemProduct : any;
  onChange(name : any  , price:any , images:any , description:any ,idCategory:any) {
    this.itemProduct = {
      nameProduct: name ? name : this.subject.nameProduct,
      priceProduct : price ? price : this.subject.priceProduct,
      images: images ? images : this.subject.images,
      description: description ? description : this.subject.description,
      idCategory : idCategory ? idCategory : this.subject.idCategory
    };
    this.httpClient.put('https://665ef1a61e9017dc16f2221f.mockapi.io/products/' + this.productId, this.itemProduct).subscribe((data) => {
      this.router.navigate(['/Product']); 
    });
  }
}
