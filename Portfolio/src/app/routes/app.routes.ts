import {ModuleWithProviders} from "@angular/core"; // Allow import all routes with providers
import {Routes, RouterModule} from "@angular/router"; // Import all modules for create all routes

// Import all modules for are includes in the routes
import {AboutMeComponent} from '../components/about-me/about-me.component';
import {ProjectsComponent} from '../components/projects/projects.component';
import {CreateProjectsComponent} from '../components/create-projects/create-projects.component';
import {ContactComponent} from '../components/contact/contact.component';
import {DetailsProjectComponent} from "../components/details-project/details-project.component";
import {EditComponent} from "../components/edit/edit.component"

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: AboutMeComponent},
  {path: 'projectslist', component: ProjectsComponent},
  {path: 'generateprojects', component: CreateProjectsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'projectdetails/:id', component: DetailsProjectComponent},
  {path: 'editproject/:id', component: EditComponent},
  {path: '**', component: AboutMeComponent}
]

export const appRoutinProviders: any[] = []
export const routin: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes)
