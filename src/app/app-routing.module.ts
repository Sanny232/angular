import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GamesComponent} from "./features/games/pages/games/games.component";
import {AuthGuard} from "./core/guards/auth.guard";
import {LibraryComponent} from "./features/games/pages/library/library.component";
import {LoginComponent} from "./core/components/login/login.component";
import {GamePageComponent} from "./features/games/pages/game-page/game-page.component";
import {GamePageResolver} from "./features/games/resolvers/game-page.resolver";

const routes: Routes = [{
  path: '',
  component: LoginComponent,
  pathMatch: 'full'
},{
  path: 'games',
  component: GamesComponent,
  canActivate: [AuthGuard],
  pathMatch: 'full'
},{
  path: 'games/:id',
  component: GamePageComponent,
  resolve: {
    game: GamePageResolver
  }
},
  {
    path: 'library',
    component: LibraryComponent
  },
  {path: '**', redirectTo: 'games'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
