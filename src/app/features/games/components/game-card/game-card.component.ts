import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {GamesService} from "../../services/games.service";



@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input() gameInfo : any;
  @Output() libStatusUpdate = new EventEmitter();

  constructor(private gameService: GamesService) { }

  addToLib(id: string){
    this.gameService.addGameToLib$(id).subscribe(() => {
        this.libStatusUpdate.emit();
    }
    );
  }
  removeFromLib(id: string){
    this.gameService.removeGameFromLibrary$(id).subscribe(() => {
      this.libStatusUpdate.emit();
    })
  }

  ngOnInit(): void {
  }

}
