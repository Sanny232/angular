import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {pluck} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  protected friendsStore$ = new BehaviorSubject({friends: [], requests: [], possible: [], loading: false, search: ''});
  setState$(newState: any){
    this.friendsStore$.next({...this.friendsStore$.getValue(), ...newState});
  }
  getFriends$(){
    return this.friendsStore$.pipe(pluck('friends'));
  }
  getRequests$(){
    return this.friendsStore$.pipe(pluck('requests'));
  }
  getPossibleFriends$(){
    return this.friendsStore$.pipe(pluck('possible'));
  }
  isLoading$(){
    return this.friendsStore$.pipe(pluck('loading'));
  }

  constructor() { }
}
