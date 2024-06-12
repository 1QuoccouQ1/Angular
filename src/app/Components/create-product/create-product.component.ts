import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectService } from '../../services/subject.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit{
  subjects : any;
  nameTable : any;
  product = {
    name: '',
    description: '',
    price: 0,
    category: '',
    image: null,
    url: ''
  };

  User : any = 'products';
  constructor ( private subject: SubjectService  , protected httpClient: HttpClient ,private router: Router ) {
    
  }

  ngOnInit() {
    this.loanding();
  }
  
  loanding() {
    this.subject.getList('products').subscribe(res => {
      // this.loaing=true;
      this.subjects = res.slice(0, 13);

    });
  }
 
  itemProduct : any;
  onCreate(name:any ,  price:any , images:any , description:any) {
    console.log(name, price, images, description);
    this.itemProduct = {
      nameProduct: name,
      priceProduct : price,
      images: images,
      description: description,
    };
    this.httpClient.post('https://665ef1a61e9017dc16f2221f.mockapi.io/products/', this.itemProduct).subscribe((data) => {
      this.loanding();
      this.router.navigate(['/Product']); 
    });
  }
}
