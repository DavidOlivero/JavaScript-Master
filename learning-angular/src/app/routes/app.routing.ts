// Import routers module
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Import components
import { HomeComponent } from "../components/home/home.component";
import { VideoGamesComponent } from "../components/video-games/video-games.component";
import { NotFound404Component } from "../components/not-found404/not-found404.component";
import { ExternalApiComponent } from "../components/external-api/external-api.component";

// Routers array
const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'videogames', component: VideoGamesComponent },
    { path: 'externalapi', component: ExternalApiComponent },
    { path: 'externalapi/:page', component: ExternalApiComponent },
    { path: 'videogames/:name', component: VideoGamesComponent },
    { path: '**', component: NotFound404Component }
]

// Export router module
export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes)