import { Component, OnInit } from '@angular/core';
import {RequestsService} from "../../services/requests.service";
import {Observable} from "rxjs";

@Component({
  selector: 'friends-requests',
  templateUrl: './friends-requests.component.html',
  styleUrls: ['./friends-requests.component.css']
})
export class FriendsRequestsComponent implements OnInit {
  public requests$: Observable<any>;
  public loading$: Observable<Boolean>
  constructor(private requestsService: RequestsService) { }

  accept(id: string){
    this.requestsService.acceptRequest(id);
  }
  reject(id: string){
    this.requestsService.rejectRequest(id);
  }
  ngOnInit(): void {
    this.requests$ = this.requestsService.getRequests$();
    this.loading$ = this.requestsService.isLoading$();
  }

}
