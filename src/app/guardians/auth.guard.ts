import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { environment } from 'src/environments/environment';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): boolean {
    const token = this.loginService.getToken();
    
    if(token){
      const decoded:any = jwt_decode(token);
      if(decoded.backkey == environment.frontkey){
        return true;
      }
      else{
        this.router.navigate(['login']);
        return false;
      }
    }
    else{
      this.router.navigate(['login']);
      return false;
    }
  }
}
