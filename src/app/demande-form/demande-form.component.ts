import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DemandeService } from '../demande.service';

@Component({
  selector: 'app-demande-form',
  templateUrl: './demande-form.component.html',
  styleUrls: ['./demande-form.component.css']
})
export class DemandeFormComponent implements OnInit {

  demandeForm = new FormGroup({
    dateDebut: new FormControl('', Validators.required),
    dateFin: new FormControl('', Validators.required),
  });

  constructor(private demadeService: DemandeService, 
          private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.demandeForm.value)
    this.demadeService.saveDemande(this.demandeForm.value).then(r=> {
      this.router.navigateByUrl("/demandes");
    })
  }

}
