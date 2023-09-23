// Import routers module
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Import components
import { HomeComponent } from "../components/home/home.component";
import { VideoGamesComponent } from "../components/video-games/video-games.component";
import { NotFound404Component } from "../components/not-found404/not-found404.component";

// Routers array
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'videogames', component: VideoGamesComponent },
    { path: '**', component: NotFound404Component }
]

// Export router module
export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes)