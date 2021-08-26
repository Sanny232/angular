import {Component, Input, OnInit} from '@angular/core';
import {GamesService} from "../../services/games.service";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input() gameInfo : any;

  constructor(private gameService: GamesService) { }

  addToLib(id: string){
    this.gameService.addGameToLib$(id).subscribe();
  }

  ngOnInit(): void {
  }

}
