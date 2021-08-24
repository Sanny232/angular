import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  loggedIn: boolean;
  constructor(private authService: AuthService) {
  }
  ngOnInit(){
    this.authService.logged$().subscribe(val => {
      this.loggedIn = val;
    });
  }
  exit(){
    this.authService.logOut();
  }
}
