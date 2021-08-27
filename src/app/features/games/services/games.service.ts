import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin} from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  url: String = 'http://localhost:8082';

  constructor(private http: HttpClient) {}

  getGames$(searchQuery: String, filters: string[]){
    const getGamesRequest = this.http.post(this.url+'/api/games/all', {searchQuery, filters});
    const getLibraryGamesRequest = this.http.get(this.url+'/api/games/library');

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
    return this.http.get(this.url+'/api/games/library')
  }
  addGameToLib$(gameId: string){
    const body = {
      gameId
    }
    return this.http.post(this.url+'/api/games/library', body);
  }
  removeGameFromLibrary$(gameId: string){
    return this.http.delete(this.url+'/api/games/library/'+gameId);
  }
  getGameInfo$(gameId: string){
    return this.http.get(this.url+'/api/games/'+gameId);
  }
}
