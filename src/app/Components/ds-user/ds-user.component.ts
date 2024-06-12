import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-ds-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ds-user.component.html',
  styleUrl: './ds-user.component.css'
})
export class DsUserComponent {
  subjects : any;
  nameTable : any;
  User : any = 'User';
  constructor ( private subject: SubjectService ) {
    
  }

  ngOnInit() {
    this.loanding();
  }
  
  loanding() {
    this.subject.getList('User').subscribe(res => {
      // this.loaing=true;
      this.subjects = res.slice(0, 13);
      localStorage.setItem('user', this.subjects.length);

    });
  }
  onDelete(id: any , nameTable : string) {
    this.subject.Delete(id,nameTable).subscribe(res => {
      
    });
  }
  
}
