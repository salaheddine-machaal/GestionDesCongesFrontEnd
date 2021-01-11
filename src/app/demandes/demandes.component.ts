import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeService } from '../demande.service';
import { LoginService } from '../login.service';
import { Demande } from '../models/demande';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {

  demandes: Demande[] = [];

  userRole: string = "";

  constructor(private demandeService: DemandeService,
    private loginService : LoginService, private router: Router) { }

  ngOnInit(): void {
    let roles = this.loginService.getRoles();
    if(roles){
      this.userRole = roles[0].authority;
      console.log(this.userRole)
    }
    this.getDemandes();

    
  }

  getDemandes(){
    this.demandeService.getDemandes().then((data => {
      //  executed when the infos are corrects
      console.log("demandes : ", data);
      this.demandes = data as any;
   //   this.router.navigateByUrl('/demandes');
    }));
  }

  deleteDemande(value:number)
  {
    this.demandeService.deleteDemande(value).then(r => {
      this.getDemandes();
    })
  }
  changeStatusDemande(demande : Demande)
  {
    this.demandeService.changeStatus(demande).then(r =>{
      this.getDemandes();
    });
  }

  refuseDemande(demande: Demande){
    demande.status = "REFUSED";
    this.changeStatusDemande(demande);
  }

  logOut(){
    this.loginService.logout();
    this.router.navigateByUrl("/login");
  }

  
}
