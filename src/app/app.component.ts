import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend-movies';

  backgrounds: string[] = [
    'https://images.unsplash.com/photo-1611021809244-83074a8a42c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80'
  ];

  ngOnInit() {
    this.setRandomBackground();
  }

  setRandomBackground() {
    const randomIndex = Math.floor(Math.random() * this.backgrounds.length);
    const selectedBackground = this.backgrounds[randomIndex];
    document.body.style.backgroundImage = `url(${selectedBackground})`;
  }
}
