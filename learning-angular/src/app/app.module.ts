import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { routing, appRoutingProviders } from "./routes/app.routing";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './components/root/app.component';
import { VideoGamesComponent } from './components/video-games/video-games.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { HomeComponent } from './components/home/home.component';
import { ExternalApiComponent } from './components/external-api/external-api.component';
import { CalculatorPipe } from "./pipes/calculator.pipe";
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoGamesComponent,
    NotFound404Component,
    HomeComponent,
    ExternalApiComponent,
    CalculatorPipe,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
