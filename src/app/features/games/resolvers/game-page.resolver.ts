import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {GamesService} from "../services/games.service";

@Injectable({
  providedIn: 'root'
})
export class GamePageResolver implements Resolve<boolean> {
  constructor(private gameService: GamesService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.gameService.getGameInfo$(route.params.id)
  }
}
