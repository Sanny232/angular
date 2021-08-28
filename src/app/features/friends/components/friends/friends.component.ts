import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FriendsService} from "../../services/friends.service";
import {fromEvent, Observable} from "rxjs";
import {debounceTime, distinctUntilChanged, tap} from "rxjs/operators";
import {RequestsService} from "../../services/requests.service";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  constructor(private friendsService: FriendsService,
              private requestsService: RequestsService) { }
  friends$: Observable<any>;
  requests$: Observable<any>
  @ViewChild('search') search: ElementRef;
  ngAfterViewInit() {
    fromEvent(this.search.nativeElement,'keyup')
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.friendsService.setSearchString(this.search?.nativeElement.value || '');
        })
      ).subscribe()
  }
  accept(id: string){
    this.requestsService.acceptRequest(id);
  }
  reject(id: string){
    this.requestsService.rejectRequest(id);
  }
  removeFriend(id: string){
    this.friendsService.removeFriend(id);
  }
  updateData(index: number){
    switch (index){
      case 0: this.friendsService.updateFriends();
      break;
      case 1: console.log('Search');
      break;
      case 2: this.requestsService.updateRequests();
      break;
    }
  }
  ngOnInit(): void {
    this.friends$ = this.friendsService.getFriends$();
    this.requests$ = this.requestsService.getRequests$();
  }
}
