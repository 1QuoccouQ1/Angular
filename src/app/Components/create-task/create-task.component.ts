import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectService } from '../../services/subject.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  subjects: any;
  nameTable: any;
  product = {
    name: '',
  };

  User: any = 'products';
  constructor(private subject: SubjectService, protected httpClient: HttpClient, private router: Router) { }

  ngOnInit() { }

  itemProduct: any;
  onCreate(form: NgForm) {
    if (form.valid) {
      this.itemProduct = {
        TaskName: form.value.name,
      };
      this.httpClient.post('https://66667131a2f8516ff7a36663.mockapi.io/Task/', this.itemProduct).subscribe((data) => {
        this.router.navigate(['/Task']);
      });
    }
  }
}
