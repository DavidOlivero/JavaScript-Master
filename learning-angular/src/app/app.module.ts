import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { routing, appRoutingProviders } from "./routes/app.routing";

import { AppComponent } from './components/root/app.component';
import { VideoGamesComponent } from './components/video-games/video-games.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoGamesComponent,
    NotFound404Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
