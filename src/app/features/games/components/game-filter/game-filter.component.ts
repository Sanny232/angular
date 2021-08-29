import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../services/games.service";

@Component({
  selector: 'game-filter',
  templateUrl: './game-filter.component.html',
  styleUrls: ['./game-filter.component.css']
})
export class GameFilterComponent implements OnInit {
  public subtasks = [
    {name: 'Horror', completed: true},
    {name: 'Fighting', completed: true},
    {name: 'Adventure', completed: true},
    {name: 'Strategy', completed: true},
  ]
  public price = 2000;

  getSelected(){
    const selected = this.subtasks.filter(el => el.completed);
    const filters = selected.map(el => el.name);
    this.gameService.setFilters(filters, +this.price);
  }

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
  }

}
