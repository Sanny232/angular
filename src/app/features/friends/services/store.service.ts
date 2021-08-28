import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {pluck} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private friendsStore$ = new BehaviorSubject({friends: [], requests: [], loading: false});
  setState$(newState: any){
    this.friendsStore$.next({...this.friendsStore$.getValue(), ...newState});
  }
  getFriends$(){
    return this.friendsStore$.pipe(pluck('friends'));
  }
  getRequests$(){
    return this.friendsStore$.pipe(pluck('requests'));
  }

  constructor() { }
}
