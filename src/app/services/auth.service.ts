import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn$ = new BehaviorSubject(false);

  constructor(private http: HttpClient,
              private _snackBar: MatSnackBar,
              private router: Router) {
    const token = this.getToken();
    if(token)
      this.isLoggedIn$.next(true);
  }

  signIn(email: String, password: String){
    const body = {
      email,
      password
    }
    this.http.post('https://angular-project-11.herokuapp.com/api/auth/login', body).subscribe(
      (res: any) => {
        localStorage.setItem('access_token', res.jwt_token);
        this.isLoggedIn$.next(true);
        this.router.navigate(['games']);
      },
      error => this._snackBar.open(error.error.message || 'Error', 'OK'));
  }
  logOut(){
    localStorage.removeItem('access_token');
    this.isLoggedIn$.next(false);
    this.router.navigate(['']);
  }
  logged$(){
    return this.isLoggedIn$;
  }
  getToken(){
    return localStorage.getItem('access_token')
  }
}
