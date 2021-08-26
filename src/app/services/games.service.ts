import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin} from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) {}

  getGames$(searchQuery: String, filters: string[]){
    const getGamesRequest = this.http.post('http://localhost:8082/api/games/all', {searchQuery, filters});
    const getLibraryGamesRequest = this.http.get('http://localhost:8082/api/games/library');

    return forkJoin({
      getGamesRequest,
      getLibraryGamesRequest
    }).pipe(map((resp: any) => {
      return [
        ...resp['getGamesRequest'].map((el: any) => {
          return {
            ...el,
            selected: resp['getLibraryGamesRequest'].some((element: any) => element._id === el._id)
          }
        })
      ]
    }))
  }

  getLibraries$(){
    return this.http.get('http://localhost:8082/api/games/library')
  }
  addGameToLib$(gameId: string){
    const body = {
      gameId
    }
    return this.http.post('http://localhost:8082/api/games/library', body);
  }
  removeGameFromLibrary$(gameId: string){
    return this.http.delete('http://localhost:8082/api/games/library/'+gameId);
  }
}
