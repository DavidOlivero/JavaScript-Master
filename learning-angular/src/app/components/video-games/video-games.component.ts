import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

// The hooks are eventa that are runner during componets life cycle
/*
OnInit -> When the componets is loaded
DoCheck -> When to do a change
OnDestroy -> When the componet is destroyed
*/

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.css']
})
export class VideoGamesComponent implements OnInit, DoCheck, OnDestroy {
  public title: string

  constructor() {
    this.title = 'página de juegos'
    console.log("El componente videoGames ha sido cargado correctamente")
  }

  public changeTitle = ():void => {
    this.title = 'Página de títulos cambiada'
  }

  ngOnInit(): void {
    alert("Todo correcto en el componente videojuegos")
  }

  ngDoCheck(): void {
    alert("Se ha producido un cambio")
  }

  ngOnDestroy(): void {
    alert("El componente ha sido eliminado")
  }
}
