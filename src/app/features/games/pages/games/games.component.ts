import {Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {GamesService} from "../../services/games.service";
import {FormControl, FormGroup} from "@angular/forms";
import {fromEvent} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, tap} from "rxjs/operators";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit, AfterViewInit {
  @ViewChild('search') search: ElementRef;

  public games: any;
  public loading: Boolean;
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
          this.getSelected()
        })
      )
      .subscribe();
  }
  ngOnInit(): void {
   this.onResize();
    this.getSelected();
  }
  getGames(searchQuery: String, filters: string[]){
    this.loading = true;
    this.gameService.getGames$(searchQuery, filters).subscribe((res) => {
      this.games = res;
      this.loading = false;
    });
  }
  onResize(){
    this.filtersOpen = window.innerWidth > 500;
  }
  getSelected(){
    const selected = this.subtasks.filter(el => el.completed);
    const filters = selected.map(el => el.name);
    const searchQuery = this.search?.nativeElement.value || '';
    this.getGames(searchQuery, filters)
  }
}
