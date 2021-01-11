import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';
import { User } from './models/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService  {

  constructor(private http: HttpClient, private router : Router) { }

  login(data: any){
    return new Promise(resolve=>{
      this.http.post(environment.baseUrl+"login", data, {observe:'response'}).subscribe((response => {
        //  executed when the infos are corrects
        console.log("server response : ", response);
        let jwt = response.headers.get('Authorization');
        if(jwt != null){
          localStorage.setItem('token', jwt)
          resolve(true);
        }
        resolve(false);
      }), error=>{
        // executed when the username and password are not correct
        //  this.notValid = true;
        resolve(false);
      })
    });
  }

  saveUser(user : User)
  {
    let token = this.getTokenFromLocalStorage();

    let data = { user, role : user.role}

    return new Promise((resolve, rejects)=>{
      this.http.post(environment.baseUrl+"register", data, {headers:new HttpHeaders({'Authorization':token})})
      .subscribe(response=> {
        resolve(response);
      }, error=> {
        rejects(error);
      })
    });
  }

  getTokenFromLocalStorage(): string{
    let token = localStorage.getItem('token');
    if(token){
      return token;
    }
    this.router.navigateByUrl('/login');
    return "";
  }

  getRoles(){
    let token = this.getToken();
    if(token && token != null){
      let decoded = jwt_decode(token); 
      console.log(decoded);
      return (decoded as any).roles
    }
    return undefined;
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logout(){
    localStorage.clear();
  }
}
