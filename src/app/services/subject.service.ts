import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }
 
  url = "https://665ef1a61e9017dc16f2221f.mockapi.io/"
  url2 = "https://66667131a2f8516ff7a36663.mockapi.io/"

  getList(nameTable : string) :Observable<any>{
    return this.http.get(this.url + nameTable);
  }
  Delete(id : any , nameTable : string) :Observable<any>{
    return this.http.delete(this.url + nameTable +'/' + id);
  }
  getTask(nameTable : string) :Observable<any>{
    return this.http.get(this.url2 + nameTable);
  }
  DeleteTask(id : any , nameTable : string) :Observable<any>{
    return this.http.delete(this.url2 + nameTable +'/' + id);
  }
  
}
