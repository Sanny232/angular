import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) {}

  getGames$(searchQuery: String, filters: string[]){
    const body = {
      searchQuery,
      filters
    }
    return this.http.post('http://localhost:8082/api/games/all', body)
  }
}
