import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {XyzComponent} from "./components/xyz/xyz.component";
import {GamesComponent} from "./components/games/games.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./guards/auth.guard";
import {LibraryComponent} from "./components/library/library.component";

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
