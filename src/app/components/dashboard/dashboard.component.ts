import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  ngOnInit(){
    document.body.style.backgroundImage = '';
    document.body.style.backgroundColor = `white`;
  }
  
}
