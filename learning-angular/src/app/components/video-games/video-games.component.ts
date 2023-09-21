import { Component, OnInit, /*DoCheck, OnDestroy*/ 
numberAttribute} from '@angular/core';
import { settings } from "../../models/settings";
import { VideoGame } from "../../models/video-game";

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

export class VideoGamesComponent implements OnInit /*DoCheck, OnDestroy*/ {
  public title: string
  public description: string
  public videoGames: Array<VideoGame> //VideoGames[]
  public dominatPlatform: string

  constructor() {
    this.title = settings.title[1]
    this.description = settings.description[1]
    this.dominatPlatform = 'PlayStation 4'
    
    // Game list
    // Game list
    const game1 = new VideoGame("Assassin's Creed Valhalla", "Action-Adventure", 2020, "PlayStation 5");
    const game2 = new VideoGame("The Legend of Zelda: Breath of the Wild", "Action-Adventure", 2017, "Nintendo Switch");
    const game3 = new VideoGame("Red Dead Redemption 2", "Action-Adventure", 2018, "Xbox One");
    const game4 = new VideoGame("The Witcher 3: Wild Hunt", "Action-Adventure", 2015, "PC");
    const game5 = new VideoGame("God of War", "Action-Adventure", 2018, "PlayStation 4");
    const game6 = new VideoGame("Grand Theft Auto V", "Action-Adventure", 2013, "Xbox One");
    const game7 = new VideoGame("Super Mario Odyssey", "Platformer", 2017, "Nintendo Switch");
    const game8 = new VideoGame("Minecraft", "Sandbox", 2011, "PC");
    const game9 = new VideoGame("The Last of Us Part II", "Action-Adventure", 2020, "PlayStation 4");
    const game10 = new VideoGame("Call of Duty: Modern Warfare", "First-person shooter", 2019, "Xbox One");

    this.videoGames = [game1, game2, game3, game4, game5, game6, game7, game8, game9, game10];
  }

  public changeTitle = ():void => {
    this.title = 'Página de títulos cambiada'
  }

  ngOnInit(): void {
    let amoungplatforms: { [key: string]: number } = {}
    
    this.videoGames.forEach(({ platform }) => {
      if (platform in amoungplatforms) {
        amoungplatforms[platform]++
      } else {
        amoungplatforms[platform] = 1
      }
    })

    let maxPlatform: string = ''
    let maxCount: number = 0
    for(const platform in amoungplatforms) {
      if (amoungplatforms[platform] > maxCount) {
        maxPlatform = platform
        maxCount = amoungplatforms[platform]
      }
    }

    this.dominatPlatform = maxPlatform
  }

  // ngDoCheck(): void {
  //   console.log("Se ha producido un cambio")
  // }

  // ngOnDestroy(): void {
  //   console.log("El componente ha sido eliminado")
  // }
}
