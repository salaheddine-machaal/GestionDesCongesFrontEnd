import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  notValid: boolean = false;

  constructor(private loginService: LoginService,
      private router: Router) { }

  ngOnInit(): void {
    let token = this.loginService.getToken();
    if(token && token != null){
      this.router.navigateByUrl('/demandes');
    }

 console.log("getting orders")
    this.loginService.getRoles();
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value); // {"username" : "", "password": ""}
    this.loginService.login(this.profileForm.value).then(data => {
      if(data && data == true){
        this.router.navigateByUrl('/demandes');
      }else{
        this.notValid = true;
      }
    });

  }

  


}
