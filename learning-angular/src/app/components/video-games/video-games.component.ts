import { Component, OnInit, DoCheck /*OnDestroy*/ } from '@angular/core';
import { settings } from "../../models/settings";
import { VideoGame } from "../../models/video-game";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { VideoGameService } from "../../services/game.services";

// The hooks are eventa that are runner during componets life cycle
/*
OnInit -> When the componets is loaded
DoCheck -> When to do a change
OnDestroy -> When the componet is destroyed
*/

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.css'],
  providers: [VideoGameService]
})

export class VideoGamesComponent implements OnInit, DoCheck /*, OnDestroy*/ {
  public showGame: boolean
  public title: string
  public description: string
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

  public videoGames: Array<VideoGame> = []
  public game: string = ''

  private _videoGameService: VideoGameService 

  // Accedemos a la ruta actual
  private _route: ActivatedRoute
  private _router: Router

  constructor(_videoGameService: VideoGameService,  _route: ActivatedRoute, _router: Router) {
    this.showGame = true
    this.title = settings.title[1]
    this.description = settings.description[1]
    this.dominatPlatform = 'PlayStation 4'

    this._videoGameService = _videoGameService

    this._route = _route
    this._router = _router
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
    this.videoGames = this._videoGameService.getVideoGames()
    
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
