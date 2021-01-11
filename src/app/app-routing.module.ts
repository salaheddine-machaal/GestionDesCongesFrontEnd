import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandeFormComponent } from './demande-form/demande-form.component';
import { DemandesComponent } from './demandes/demandes.component';
import { LoginComponent } from './login/login.component';
import { AdduserComponent } from './adduser/adduser.component';



const routes: Routes = [
  { path:  '', component:  LoginComponent},
  { path:  'login', component:  LoginComponent},
  { path:  'demandes', component:  DemandesComponent},
  { path:  'create', component:  DemandeFormComponent},
  { path:  'adduser', component:  AdduserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
