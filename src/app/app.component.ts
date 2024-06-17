import { Component, Input ,EventEmitter,ViewChild ,OnInit,AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule , NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductComponent } from './product/product.component';
import { SubjectService } from './services/subject.service';
import { HttpClient } from '@angular/common/http';
import { DataService } from './services/data.service';
import { DsProductComponent } from './Components/ds-product/ds-product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, FontAwesomeModule,ProductComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  @ViewChild('formLogin') formLogin?: NgForm;
  @ViewChild(DsProductComponent) childComponent!: DsProductComponent;
  name = 'Nguyen Văn B';
  searchQuery: string = '';
  searchQueryPrams:string = ''
  loaing = true;
  isDropdownVisible: boolean = false;



 
// Call API
  subjects : any;
  constructor ( private subject: SubjectService , private std: SubjectService , private http: HttpClient,private dataService: DataService) {
    
  }
  ngOnInit() {
  }
  
  

  seach() {
    this.searchQueryPrams = this.searchQuery
  }
  item = {};

  showDetails( item:any ) {
    console.log(item)
  }
  
  onSubmit() {
    console.log(this.formLogin?.value);
  }
  Drop() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
