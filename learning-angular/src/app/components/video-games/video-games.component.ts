import { Component, OnInit, DoCheck /*OnDestroy*/ } from '@angular/core';
import { settings } from "../../models/settings";
import { VideoGame } from "../../models/video-game";
import { Router, ActivatedRoute, Params } from "@angular/router";

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

export class VideoGamesComponent implements OnInit, DoCheck /*, OnDestroy*/ {
  public showGame: boolean
  public title: string
  public description: string
  public videoGames: Array<VideoGame> //VideoGames[]
  public dominatPlatform: string
  public myGame: string = ""
  public myGameData: {
    name: string,
    genre: string,
    releaseYear: number,
    platform: string
  } = {
    name: '',
    genre: '',
    releaseYear: 0,
    platform: ''
  }

  public game: string = ''

  // Accedemos a la ruta actual
  private _route: ActivatedRoute
  private _router: Router

  constructor(_route: ActivatedRoute, _router: Router) {
    this.showGame = true
    this.title = settings.title[1]
    this.description = settings.description[1]
    this.dominatPlatform = 'PlayStation 4'

    this._route = _route
    this._router = _router
    
    // Game list
    // Game list
    const game1 = new VideoGame("Assassin's Creed Valhalla", "Action-Adventure", 2020, "PlayStation 5", 0);
    const game2 = new VideoGame("The Legend of Zelda: Breath of the Wild", "Action-Adventure", 2017, "Nintendo Switch", 1);
    const game3 = new VideoGame("Red Dead Redemption 2", "Action-Adventure", 2018, "Xbox One", 2);
    const game4 = new VideoGame("The Witcher 3: Wild Hunt", "Action-Adventure", 2015, "PC", 3);
    const game5 = new VideoGame("God of War", "Action-Adventure", 2018, "PlayStation 4", 4);
    const game6 = new VideoGame("Grand Theft Auto V", "Action-Adventure", 2013, "Xbox One", 5);
    const game7 = new VideoGame("Super Mario Odyssey", "Platformer", 2017, "Nintendo Switch", 6);
    const game8 = new VideoGame("Minecraft", "Sandbox", 2011, "PC", 7);
    const game9 = new VideoGame("The Last of Us Part II", "Action-Adventure", 2020, "PlayStation 4", 8);
    const game10 = new VideoGame("Call of Duty: Modern Warfare", "First-person shooter", 2019, "Xbox One", 9);

    this.videoGames = [game1, game2, game3, game4, game5, game6, game7, game8, game9, game10];
  }

  public changeGameVisibility = ():void => {
    this.showGame ? this.showGame = false : this.showGame = true
  }

  public getMyGame = ():void => {
    alert(`El juego que agregaste es ${this.myGame}`)
  }

  public addNewGame = ():void => {
    const currentId: number = this.videoGames[this.videoGames.length - 1].id
    this.videoGames.push(new VideoGame(this.myGameData.name, this.myGameData.genre, this.myGameData.releaseYear, this.myGameData.platform, currentId))
    
    this.myGameData.name = ''
    this.myGameData.genre = ''
    this.myGameData.releaseYear = 0
    this.myGameData.platform = ''
  }

  public deleteGame = (index: number):void => {
    this.videoGames = this.videoGames.filter(({ id }) => {
      return id !== index
    })
  }

  public searchGame = ():void => {
    this._router.navigate(['videogames', this.game])
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

   ngDoCheck(): void {
    this._route.params.subscribe(({ name }) => {
      if (name !== undefined) {
        this.videoGames = this.videoGames.filter(({ title }) => {
          return title.trim().toLocaleLowerCase().includes(name.trim().toLocaleLowerCase())
        })
      }
    })
  }

  // ngOnDestroy(): void {
  //   console.log("El componente ha sido eliminado")
  // }
}
