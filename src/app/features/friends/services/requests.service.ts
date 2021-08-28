import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StoreService} from "./store.service";

@Injectable({
  providedIn: 'root'
})
export class RequestsService extends StoreService{
  acceptRequest(id: string){
    this.http.put('http://localhost:8082/api/friends/requests/'+id+'/accept', {}).subscribe(() => {
      this.updateRequests();
    })
  }
  rejectRequest(id: string){
    this.http.put('http://localhost:8082/api/friends/requests/'+id+'/reject', {}).subscribe(() => {
      this.updateRequests();
    })
  }
  updateRequests(){
    this.http.get('http://localhost:8082/api/friends/requests/toMe').subscribe((value) => {
      this.setState$({requests: value});
    });
  }
  constructor(private http: HttpClient) {
    super();
    this.updateRequests()
  }
}
