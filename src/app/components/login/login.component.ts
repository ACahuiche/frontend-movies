import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userEmail: string = '';
  userPassword: string = '';

  constructor(private loginService: LoginService, private router: Router){}

  login(){

    this.loginService.authLogin(this.userEmail, this.userPassword)
    .subscribe(
      (response) =>{
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.log(error);
      }
    );

  }

}
