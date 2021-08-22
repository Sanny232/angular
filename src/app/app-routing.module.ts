import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {XyzComponent} from "./components/xyz/xyz.component";
import {GamesComponent} from "./components/games/games.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [{
  path: '',
  component: LoginComponent
},{
  path: 'games',
  component: GamesComponent
},{
  path: 'games/:id',
  component: XyzComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
