import { Component,Output, EventEmitter,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectService } from '../../services/subject.service';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-ds-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ds-product.component.html',
  styleUrl: './ds-product.component.css'
})
export class DsProductComponent  {

  
  subjects : any;
  nameTable : any;
  User : any = 'products';
  constructor ( private subject: SubjectService  , protected httpClient: HttpClient ,private dataService: DataService) {
    
  }

  ngOnInit() {
    this.loanding();
  }
  
  
  loanding() {
    this.subject.getList('products').subscribe(res => {
      // this.loaing=true;
      this.subjects = res.slice(0, 13);
      localStorage.setItem('data', this.subjects.length);
      
    });
  }
  onDelete(id: any , nameTable : string) {
    this.subject.Delete(id,nameTable).subscribe(res => {
      this.loanding();
      
    });
  }
}
