import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../models/user';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  adduserForm = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
  });

  usernameExist: boolean = false;
  userCreated : boolean = false;

  roles = [
    {'name':"Employee", 'value':"Employee" },
    {'name':"Rh", 'value':"Rh" },
    {'name':"Dg", 'value':"Dg" },
    {'name':"Manager", 'value':"Manager" }
  ];

  constructor(private loginservice: LoginService) { }

  ngOnInit(): void {
  }

  addUser(){
    this.userCreated = false;
    this.usernameExist = false;
    this.loginservice.saveUser(this.adduserForm.value).then(r => {
      console.log("response : ", r)
      this.userCreated = true;
    }).catch(e => {
      this.usernameExist = true;
      console.log("error : ", e)
    })
  }
}

