import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../services/games.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  public library$: Observable<any>;
  constructor(private gameService: GamesService) { }

  getLibrary(){
    this.library$ = this.gameService.getLibraries$();
  }
  removeLibrary(gameId: string){
    this.gameService.removeGameFromLibrary$(gameId).subscribe((res) => {
      this.getLibrary();
    })
  }

  ngOnInit(): void {
    this.getLibrary();
  }
}
