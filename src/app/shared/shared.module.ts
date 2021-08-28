import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';

const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatInputModule,
  MatIconModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatTabsModule,
  MatListModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports: [
    ...materialModules
  ]
})
export class SharedModule { }
