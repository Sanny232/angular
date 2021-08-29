import {Component, ElementRef, ViewChild} from '@angular/core';
import {fromEvent} from "rxjs";
import {debounceTime, distinctUntilChanged, tap} from "rxjs/operators";
import {GamesService} from "../../services/games.service";

@Component({
  selector: 'game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent {
  @ViewChild('search') search: ElementRef;

  ngAfterViewInit() {
    fromEvent(this.search.nativeElement,'keyup')
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.gameService.setSearchString(this.search?.nativeElement.value || '');
        })
      ).subscribe()
  }
  clearSearch(){
    this.search.nativeElement.value = '';
    this.gameService.setSearchString('');
  }
  constructor(private gameService: GamesService) { }
}
