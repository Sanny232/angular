import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StoreService} from "./store.service";

@Injectable({
  providedIn: 'root'
})
export class FriendsService extends StoreService{
  updateFriends(){
    this.http.get('http://localhost:8082/api/friends/mine').subscribe((value) => {
      this.setState$({friends: value});
    });
  }
  removeFriend(id: string){
    this.http.delete('http://localhost:8082/api/friends/'+id).subscribe((value) => {
      this.updateFriends();
    });
  }
  setSearchString(value: string){
    this.setState$({search: value});
    //this.updateAllData();
  }

  constructor(private http: HttpClient) {
    super();
    this.updateFriends();
  }
}
