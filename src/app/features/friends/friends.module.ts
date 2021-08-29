import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendsRoutingModule } from './friends-routing.module';
import { FriendsComponent } from './components/friends/friends.component';
import {SharedModule} from "../../shared/shared.module";
import { SearchFriendsComponent } from './components/search-friends/search-friends.component';
import { FriendsRequestsComponent } from './components/friends-requests/friends-requests.component';


@NgModule({
  declarations: [
    FriendsComponent,
    SearchFriendsComponent,
    FriendsRequestsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FriendsRoutingModule
  ]
})
export class FriendsModule { }
