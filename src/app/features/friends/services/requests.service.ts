import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StoreService} from "./store.service";

@Injectable({
  providedIn: 'root'
})
export class RequestsService extends StoreService{
  private url: String = 'https://angular-project-11.herokuapp.com';
  acceptRequest(id: string){
    this.http.put(this.url+'/api/friends/requests/'+id+'/accept', {}).subscribe(() => {
      this.updateRequests();
    })
  }
  rejectRequest(id: string){
    this.http.put(this.url+'/api/friends/requests/'+id+'/reject', {}).subscribe(() => {
      this.updateRequests();
    })
  }
  updateRequests(){
    this.setState$({loading: true});
    this.http.get(this.url+'/api/friends/requests/toMe').subscribe((value) => {
      this.setState$({requests: value, loading: false});
    });
  }
  constructor(private http: HttpClient) {
    super();
  }
}
