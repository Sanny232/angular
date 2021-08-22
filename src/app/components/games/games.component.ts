import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../services/games.service";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  public games: any;
  public loading: Boolean;
  public filtersOpen: Boolean = true;

  public subtasks = [
    {name: 'Horror', completed: true},
    {name: 'Fighting', completed: true},
    {name: 'Adventure', completed: true}
  ]
  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
   this.getSelected();
   this.onResize();
  }
  getGames(filters?: string[]){
    this.loading = true;
    this.gameService.getGames$(filters).subscribe((res) => {
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
    this.getGames(filters)
  }
  stopProp(e: Event){
    e.stopPropagation();
  }
}
