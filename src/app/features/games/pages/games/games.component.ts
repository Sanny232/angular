import {Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {GamesService} from "../../services/games.service";
import {fromEvent, Observable} from "rxjs";
import {debounceTime, distinctUntilChanged, tap} from "rxjs/operators";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  public games$: Observable<any>;
  public isLoading$: Observable<boolean>;
  public filtersOpen: Boolean = true;

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
   this.onResize();
   this.gameService.fetchGames$();
   this.isLoading$ = this.gameService.isLoading$();
   this.games$ = this.gameService.getGames$();
  }
  onResize(){
    this.filtersOpen = window.innerWidth > 500;
  }
}
