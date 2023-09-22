import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './components/home/app.component';
import { VideoGamesComponent } from './components/video-games/video-games.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoGamesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
