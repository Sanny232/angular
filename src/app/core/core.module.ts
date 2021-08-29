import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./components/login/login.component";
import {SharedModule} from "../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import {AppRoutingModule} from "../app-routing.module";



@NgModule({
  declarations: [LoginComponent, HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
      if (parentModule) {
        throw new Error(`Core module has already been loaded. Import Core modules in the AppModule only.`);
      }
    }
}
