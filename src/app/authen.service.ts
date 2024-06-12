import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private http:HttpClient) {
  }
  url = "http://localhost:8000/auth/";
  register(email:string,password:string){
   return this.http.post(this.url+ "register" , {email:email,password:password})
  }
  login(email:string,password:string){
   return this.http.post(this.url+ "login" , {email:email,password:password})
  }
}
