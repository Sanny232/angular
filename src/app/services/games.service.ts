import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) {}

  getGames$(){
    return this.http.get('https://angular-project-11.herokuapp.com/api/games/all')
  }
}
