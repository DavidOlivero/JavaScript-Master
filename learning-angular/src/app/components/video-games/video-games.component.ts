import { Component } from '@angular/core';

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.css']
})
export class VideoGamesComponent {
  constructor() {
    console.log("El componente videoGames ha sido cargado correctamente")
  }
}
