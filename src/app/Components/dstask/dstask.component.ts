import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-dstask',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dstask.component.html',
  styleUrl: './dstask.component.css'
})
export class DstaskComponent {
  subjects : any;
  nameTable : any;
  Task : any = 'Task';
  constructor ( private subject: SubjectService ) {
    
  }

  ngOnInit() {
    this.loanding();
  }
  
  loanding() {
    this.subject.getTask('Task').subscribe(res => {
      this.subjects = res.slice(0, 13);
    });
  }
  onDelete(id: any , nameTable : string) {
    this.subject.DeleteTask(id,nameTable).subscribe(res => {
    this.loanding();
    });
  }
}
