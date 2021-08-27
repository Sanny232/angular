import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthInterceptor} from "./core/interceptors/auth.interceptor";
import {CoreModule} from "./core/core.module";
import {GamesModule} from "./features/games/games.module";
import {SharedModule} from "./shared/shared.module";


@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        CoreModule,
        GamesModule,
        SharedModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
    ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
