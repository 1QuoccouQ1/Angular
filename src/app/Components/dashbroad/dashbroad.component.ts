import { Component,OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-dashbroad',
  standalone: true,
  imports: [],
  templateUrl: './dashbroad.component.html',
  styleUrl: './dashbroad.component.css'
})
export class DashbroadComponent implements OnInit {
  data: any = '';
  user: any = '';

  constructor ( private dataService: DataService) {
    
  }
  ngOnInit() {
    this.data = localStorage.getItem('data') || '';
    this.user = localStorage.getItem('user') || '';
  }

}
