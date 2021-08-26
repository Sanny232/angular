import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GameCardComponent} from "./components/game-card/game-card.component";
import {SharedModule} from "../../shared/shared.module";
import {LibraryComponent} from "./pages/library/library.component";
import {GamesComponent} from "./pages/games/games.component";
import {AppRoutingModule} from "../../app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ShortenedPipe } from './pipes/shortened.pipe';



@NgModule({
  declarations: [
    GameCardComponent,
    LibraryComponent,
    GamesComponent,
    ShortenedPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    GameCardComponent,
    LibraryComponent,
    GamesComponent
  ]
})
export class GamesModule { }
