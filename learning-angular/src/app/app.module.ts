import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/home/app.component';
import { VideoGamesComponent } from './components/video-games/video-games.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoGamesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
