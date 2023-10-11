import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
}
