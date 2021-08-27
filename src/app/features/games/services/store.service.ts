import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private defaultStore = {
    games: [],
    library: [],
    searchQuery: '',
    filters: ['Horror', 'Adventure', 'Fighting'],
    loading: false
  }
  protected store$ = new BehaviorSubject<any>(this.defaultStore);

  setState$(newValue: any){
    this.store$.next({...this.store$.getValue(), ...newValue});
  }

  constructor() { }
}
