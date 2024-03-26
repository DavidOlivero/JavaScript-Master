import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { routin, appRoutinProviders } from "./routes/app.routes";

import { AppMenu } from './components/menu/app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateProjectsComponent } from './components/create-projects/create-projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailsProjectComponent } from './components/details-project/details-project.component';
import {NgOptimizedImage} from "@angular/common";
import { ComponentsComponent } from './src/app/components/components.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppMenu,
    AboutMeComponent,
    ProjectsComponent,
    CreateProjectsComponent,
    ContactComponent,
    DetailsProjectComponent,
    ComponentsComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    routin,
    HttpClientModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [
    appRoutinProviders,
  ],
  bootstrap: [AppMenu]
})
export class AppModule { }
