import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private url: String = 'https://angular-project-11.herokuapp.com';
  constructor(private http: HttpClient) { }

  getProfileData$(){
    return this.http.get(this.url+'/api/profile/me');
  }
}
