import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import { DemandesComponent } from './demandes/demandes.component';
import { DemandeService } from './demande.service';
import { DemandeFormComponent } from './demande-form/demande-form.component';
import { AdduserComponent } from './adduser/adduser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DemandesComponent,
    DemandeFormComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    LoginService,
    DemandeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
