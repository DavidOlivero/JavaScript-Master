import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routin, appRoutinProviders } from "./routes/app.routes";

import { AppMenu } from './components/menu/app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateProjectsComponent } from './components/create-projects/create-projects.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppMenu,
    AboutMeComponent,
    ProjectsComponent,
    CreateProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    routin
  ],
  providers: [
    appRoutinProviders
  ],
  bootstrap: [AppMenu]
})
export class AppModule { }
