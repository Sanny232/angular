import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../services/games.service";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  public library: any;
  public loading: Boolean;
  constructor(private gameService: GamesService) { }

  getLibrary(){
    this.loading = true;
    this.gameService.getLibraries$().subscribe(val => {
      this.library = val;
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.getLibrary();
  }
}
