import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendsRoutingModule } from './friends-routing.module';
import { FriendsComponent } from './components/friends/friends.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    FriendsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FriendsRoutingModule
  ]
})
export class FriendsModule { }
