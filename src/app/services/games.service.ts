import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) {}

  getGames$(filters?: string[]){
    const body = {
      filters
    }
    return this.http.post('https://angular-project-11.herokuapp.com/api/games/all', body)
  }
}
