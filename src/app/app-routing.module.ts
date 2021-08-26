import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {XyzComponent} from "./components/xyz/xyz.component";
import {GamesComponent} from "./features/games/pages/games/games.component";
import {AuthGuard} from "./core/guards/auth.guard";
import {LibraryComponent} from "./features/games/pages/library/library.component";
import {LoginComponent} from "./core/components/login/login.component";

const routes: Routes = [{
  path: '',
  component: LoginComponent,
  pathMatch: 'full'
},{
  path: 'games',
  component: GamesComponent,
  canActivate: [AuthGuard]
},{
  path: 'games/:id',
  component: XyzComponent
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
