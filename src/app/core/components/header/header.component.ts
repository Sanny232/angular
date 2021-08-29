import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
