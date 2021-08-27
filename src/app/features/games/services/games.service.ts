import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, forkJoin} from "rxjs";
import {map, pluck} from 'rxjs/operators';
import {StoreService} from "./store.service";

@Injectable({
  providedIn: 'root'
})
export class GamesService extends StoreService {
  private url: String = 'http://localhost:8082';
  private filters: string[];
  private searchQuery: string;

  constructor(private http: HttpClient) {
    super();
  }

  isLoading$(){
    return this.store$.pipe(pluck('loading'));
  }

  setFilters(fil: string[]){
    this.setState$({filters: fil});
    this.fetchGames$();
  }
  setSearchString(search: string){
    this.setState$({searchQuery: search});
    this.fetchGames$();
  }
  getGames$(){
    return this.store$.pipe(pluck('games'))
  }
  fetchGames$(){
    console.log('LOAD GAMES')
    this.setState$({loading: true});
    this.store$.pipe(pluck('filters')).subscribe((value) => this.filters = value);
    this.store$.pipe(pluck('searchQuery')).subscribe((value) => this.searchQuery = value);

    const getGamesRequest = this.http.post(this.url+'/api/games/all', {searchQuery: this.searchQuery, filters: this.filters});
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
      .subscribe((val) => this.setState$({games: val, loading: false}));
  }

  getGameInfo$(gameId: string){
    return this.http.get(this.url+'/api/games/'+gameId);
  }
}
