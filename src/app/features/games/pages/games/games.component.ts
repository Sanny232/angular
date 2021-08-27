import {Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {GamesService} from "../../services/games.service";
import {fromEvent, Observable} from "rxjs";
import {debounceTime, distinctUntilChanged, tap} from "rxjs/operators";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit, AfterViewInit {
  @ViewChild('search') search: ElementRef;

  public games$: Observable<any>;
  public isLoading$: Observable<boolean>;
  public filtersOpen: Boolean = true;

  public subtasks = [
    {name: 'Horror', completed: true},
    {name: 'Fighting', completed: true},
    {name: 'Adventure', completed: true}
  ]

  constructor(private gameService: GamesService) { }

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
  ngOnInit(): void {
   this.onResize();
   this.gameService.fetchGames$();
   this.isLoading$ = this.gameService.isLoading$();
   this.games$ = this.gameService.getGames$();
  }
  onResize(){
    this.filtersOpen = window.innerWidth > 500;
  }
  getSelected(){
    const selected = this.subtasks.filter(el => el.completed);
    const filters = selected.map(el => el.name);
    this.gameService.setFilters(filters);
  }
}
