import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Demande } from './models/demande';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http: HttpClient, private router: Router) { }

  getDemandes(){
   
    let token = this.getTokenFromLocalStorage()
     
    return new Promise(resolve=>{
      this.http.get(environment.baseUrl+"demandes", {headers:new HttpHeaders({'Authorization':token})}).subscribe(response=> {
        resolve(response);
      })
    });
  }

  saveDemande(value: Demande){
    let token = this.getTokenFromLocalStorage()
     
    return new Promise(resolve=>{
      this.http.post(environment.baseUrl+"demande", value, {headers:new HttpHeaders({'Authorization':token})}).subscribe(response=> {
        resolve(response);
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

  deleteDemande(value: number)
    {
      let token = this.getTokenFromLocalStorage();
      return new Promise(resolve=>{
        this.http.delete(environment.baseUrl+"demande?id="+value, {headers:new HttpHeaders({'Authorization':token})}).subscribe(response=> {
          resolve(response);
        })
      });
    }
  
    changeStatus(demande:Demande)
    {
      let token = this.getTokenFromLocalStorage();
      return new Promise(resolve=>{
        this.http.put(environment.baseUrl+"demande", demande, {headers:new HttpHeaders({'Authorization':token})}).subscribe((response) => {
          resolve(response)
        });
      });
    }
}
