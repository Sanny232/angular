import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StoreService} from "./store.service";

@Injectable({
  providedIn: 'root'
})
export class FriendsService extends StoreService{
  private url: String = 'https://angular-project-11.herokuapp.com';
  updateFriends(){
    this.setState$({loading: true});
    this.http.get(this.url+'/api/friends/mine').subscribe((value) => {
      this.setState$({friends: value, loading: false});
    });
  }
  removeFriend(id: string){
    this.http.delete(this.url+'/api/friends/'+id).subscribe((value) => {
      this.updateFriends();
    });
  }

  constructor(private http: HttpClient) {
    super();
    this.updateFriends();
  }
}
