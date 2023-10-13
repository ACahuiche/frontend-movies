import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private loginService: LoginService) {}

  ngOnInit(){
    document.body.style.backgroundImage = '';
    document.body.style.backgroundColor = `white`;
  }
  
}
