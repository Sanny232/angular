import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GameCardComponent} from "./components/game-card/game-card.component";
import {SharedModule} from "../../shared/shared.module";
import {LibraryComponent} from "./pages/library/library.component";
import {GamesComponent} from "./pages/games/games.component";
import {AppRoutingModule} from "../../app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ShortenedPipe } from './pipes/shortened.pipe';
import { LibraryItemComponent } from './components/library-item/library-item.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { GameSearchComponent } from './components/game-search/game-search.component';
import { GameFilterComponent } from './components/game-filter/game-filter.component';


@NgModule({
  declarations: [
    GameCardComponent,
    LibraryComponent,
    GamesComponent,
    ShortenedPipe,
    LibraryItemComponent,
    GamePageComponent,
    GameSearchComponent,
    GameFilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    ClipboardModule,
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
