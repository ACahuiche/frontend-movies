import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  authLogin(userEmail: string, userPassword: string): Observable<any>{
    const url = "http://localhost:8030/login";

    const body = {
      "userEmail": userEmail,
      "password": userPassword
    }

      return this.http.post(url, body);
  }

  setToken(token: string): void {
    localStorage.setItem(environment.localStorageItem, token);
  }

  getToken(): string | null {
    return localStorage.getItem(environment.localStorageItem);
  }

  logout(): void {
    localStorage.removeItem(environment.localStorageItem);
  }
}
