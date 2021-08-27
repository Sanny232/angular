import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../services/games.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  public gameInfo: any;
  constructor(private gameService: GamesService,
              private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.gameInfo = this.activatedRoute.snapshot.data.game;
  }

}
