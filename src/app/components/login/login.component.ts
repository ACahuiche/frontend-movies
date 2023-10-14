import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition} from '@angular/animations'
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fadeInError', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s', style({ opacity: 1 })),
      ]),
    ]),
  ]
})
export class LoginComponent {

  userEmail: string = '';
  userPassword: string = '';
  errorOccurred: boolean = false;
  errorMessage: string = '';

  constructor(private loginService: LoginService, private router: Router){}

  login(){

    this.loginService.authLogin(this.userEmail, this.userPassword)
    .subscribe(
      (response) =>{
        this.errorOccurred = false;
        this.loginService.setToken(response.data);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.errorMessage = error.error.message;
        this.errorOccurred = true;
      }
    );

  }

}
