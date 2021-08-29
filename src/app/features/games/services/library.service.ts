import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StoreService} from "./store.service";
import {pluck} from "rxjs/operators";
import {GamesService} from "./games.service";

@Injectable({
  providedIn: 'root'
})
export class LibraryService extends StoreService{
  private url: String = 'https://angular-project-11.herokuapp.com';
  constructor(private http: HttpClient, private gamesService: GamesService) {
    super();
  }
  isLoading$(){
    return this.store$.pipe(pluck('loading'));
  }

  getLibrary$(){
    return this.store$.pipe(pluck('library'));
  }
  updateLibrary(){
    this.setState$({loading: true});
    this.http.get(this.url+'/api/games/library').subscribe(value => {
      this.setState$({library: value, loading: false});
    })
  }
  addGameToLib(gameId: string){
    const body = {
      gameId
    }
    this.http.post(this.url+'/api/games/library', body).subscribe(() => {
      this.gamesService.fetchGames$();
    });
  }
  removeGameFromLibrary(gameId: string){
    this.http.delete(this.url+'/api/games/library/'+gameId).subscribe(() => {
      this.gamesService.fetchGames$();
    });
  }
}
