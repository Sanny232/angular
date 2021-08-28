import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FriendsService} from "../../services/friends.service";
import {fromEvent, Observable} from "rxjs";
import {debounceTime, distinctUntilChanged, tap} from "rxjs/operators";
import {RequestsService} from "../../services/requests.service";
import {SearchFriendService} from "../../services/search-friend.service";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  constructor(private friendsService: FriendsService,
              private requestsService: RequestsService,
              private searchFriends: SearchFriendService) { }
  friends$: Observable<any>;
  requests$: Observable<any>;
  possibleFriends$: Observable<any>;
  loading$: Observable<boolean>;

  @ViewChild('search') search: ElementRef;
  ngAfterViewInit() {
    fromEvent(this.search.nativeElement,'keyup')
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.searchFriends.setSearchString(this.search?.nativeElement.value || '');
        })
      ).subscribe()
  }
  accept(id: string){
    this.requestsService.acceptRequest(id);
  }
  reject(id: string){
    this.requestsService.rejectRequest(id);
  }
  sendRequest(id: string){
    this.searchFriends.sendRequest(id);
  }
  removeFriend(id: string){
    this.friendsService.removeFriend(id);
  }
  updateData(index: number){
    switch (index){
      case 0: this.friendsService.updateFriends();
      break;
      case 1: this.searchFriends.updatePossibleFriends();
      break;
      case 2: this.requestsService.updateRequests();
      break;
    }
  }
  ngOnInit(): void {
    this.friends$ = this.friendsService.getFriends$();
    this.requests$ = this.requestsService.getRequests$();
    this.possibleFriends$ = this.searchFriends.getPossibleFriends$();
    this.loading$ = this.friendsService.isLoading$();
  }
}
