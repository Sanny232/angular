import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Observable} from "rxjs";
import {debounceTime, distinctUntilChanged, tap} from "rxjs/operators";
import {SearchFriendService} from "../../services/search-friend.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'search-friends',
  templateUrl: './search-friends.component.html',
  styleUrls: ['./search-friends.component.css']
})
export class SearchFriendsComponent implements OnInit {

  public possibleFriends$: Observable<any>;
  public loading$: Observable<boolean>;

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
  constructor(private searchFriends: SearchFriendService,
              private _snackBar: MatSnackBar) { }

  sendRequest(id: string){
    this.searchFriends.sendRequest(id);
    this._snackBar.open('Request has been sent', '', {duration: 1500});
  }
  ngOnInit(): void {
    this.possibleFriends$ = this.searchFriends.getPossibleFriends$();
    this.loading$ = this.searchFriends.isLoading$();
  }

}
