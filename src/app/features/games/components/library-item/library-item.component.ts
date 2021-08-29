import {Component, Input, OnInit} from '@angular/core';
import { Clipboard } from "@angular/cdk/clipboard"
import {MatSnackBar} from "@angular/material/snack-bar";
import { Location } from '@angular/common';

@Component({
  selector: 'app-library-item',
  templateUrl: './library-item.component.html',
  styleUrls: ['./library-item.component.css']
})
export class LibraryItemComponent implements OnInit {
  @Input() gameInfo : any;

  constructor(private clipboard: Clipboard,
              private _snackBar: MatSnackBar,
              private loc: Location) { }

  downloadGame(name: string, id: string){
    this._snackBar.open(`Downloading game ${name} (ID: ${id})`, 'Close')
  }
  copyLink(gameId: string){
    const angularRoute = this.loc.path();
    const url = window.location.href;
    const domainAndApp = url.replace(angularRoute, '');
    this.clipboard.copy(`${domainAndApp}/games/${gameId}`);
    this._snackBar.open('Link copied to your clipboard!', '', {
      duration: 1000
    })
  }
  ngOnInit(): void {
  }

}
