import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }
 
  url = "https://665ef1a61e9017dc16f2221f.mockapi.io/"

  getList(nameTable : string) :Observable<any>{
    return this.http.get(this.url + nameTable);
  }
  Delete(id : any , nameTable : string) :Observable<any>{
    return this.http.delete(this.url + nameTable +'/' + id);
  }
}
