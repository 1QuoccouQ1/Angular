  import { Component,Input,Output,EventEmitter } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';

  @Component({
    selector: 'app-product',
    standalone: true,
    imports: [CommonModule,FormsModule],
    templateUrl: './product.component.html',
    styleUrl: './product.component.css'
  })
  export class ProductComponent {
    @Input() name: string = '';
    @Input() product: any;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

  searchQueryPrams: string = '';
    



    @Input() address: string ='';
    @Input() type: string = '';
    @Input() bedrooms: number=0;
    @Input() bathrooms: number=0;
    @Input() area: number=0;
    @Input() price: number=0;
    @Input() addedTime: string =''; 
    
    
    

    constructor() { 
    }
  }
