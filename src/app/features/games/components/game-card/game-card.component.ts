import {Component, Input} from '@angular/core';
import {LibraryService} from "../../services/library.service";
import {GamesService} from "../../services/games.service";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {
  @Input() gameInfo : any;
  constructor(private libraryService: LibraryService) { }

  addToLib(id: string){
    this.libraryService.addGameToLib(id);
  }
  removeFromLib(id: string){
    this.libraryService.removeGameFromLibrary(id);
  }
}
