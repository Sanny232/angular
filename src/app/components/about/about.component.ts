import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../services/games.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public games: any;
  public loading: Boolean;
  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    this.loading = true;
    this.gameService.getGames$().subscribe((res) => {
      this.games = res;
      this.loading = false;
    });
  }
}
