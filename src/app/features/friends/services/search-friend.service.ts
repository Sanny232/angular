import { Injectable } from '@angular/core';
import {StoreService} from "./store.service";
import {HttpClient} from "@angular/common/http";
import {pluck} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SearchFriendService extends StoreService{
  searchString: string;
  private url: String = 'https://angular-project-11.herokuapp.com';
  updatePossibleFriends(){
    this.setState$({loading: true});
    this.friendsStore$.pipe(pluck('search')).subscribe(value => {
      this.searchString = value;
    })
    this.http.post(this.url+'/api/friends/search', {searchQuery: this.searchString}).subscribe((value) => {
      this.setState$({possible: value, loading: false});
    })
  }
  setSearchString(query: string){
    this.setState$({search: query});
    this.updatePossibleFriends();
  }
  sendRequest(id: string){
    this.http.post(this.url+'/api/friends/', {toID: id}).subscribe((value) => {
      this.updatePossibleFriends();
    })
  }
  constructor(private http: HttpClient) {
    super();
  }
}
