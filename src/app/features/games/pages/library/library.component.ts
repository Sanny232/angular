import { Component, OnInit } from '@angular/core';
import {LibraryService} from "../../services/library.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  constructor(private libraryService: LibraryService) { }
  public library$: Observable<any>;

  ngOnInit(): void {
    this.libraryService.updateLibrary();
    this.isLoading$ = this.libraryService.isLoading$();
    this.library$ = this.libraryService.getLibrary$();
  }
}
