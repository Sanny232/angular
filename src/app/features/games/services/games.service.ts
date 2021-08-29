import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin} from "rxjs";
import {map, pluck} from 'rxjs/operators';
import {StoreService} from "./store.service";

@Injectable({
  providedIn: 'root'
})
export class GamesService extends StoreService {
  private url: String = 'https://angular-project-11.herokuapp.com';
  private filters: string[];
  private searchQuery: string;
  private price: number;

  constructor(private http: HttpClient) {
    super();
  }

  isLoading$(){
    return this.store$.pipe(pluck('loading'));
  }

  setFilters(fil: string[], price: number){
    this.setState$({filters: fil, price: price});
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
    this.setState$({loading: true});
    this.store$.pipe(pluck('filters')).subscribe((value) => this.filters = value);
    this.store$.pipe(pluck('searchQuery')).subscribe((value) => this.searchQuery = value);
    this.store$.pipe(pluck('price')).subscribe((value) => this.price = value);

    const getGamesRequest = this.http.post(this.url+'/api/games/all', {searchQuery: this.searchQuery, filters: this.filters, price: this.price});
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
