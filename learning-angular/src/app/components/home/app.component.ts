import { Component } from '@angular/core';
import { settings } from "../../models/settings";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string
  public description: string
  public showGame: boolean

  constructor() {
    this.title = settings.title[0]
    this.description = settings.description[0]
    this.showGame = true
  }

  public changeGameVisibility = (): void  => {
    this.showGame ? this.showGame = false : this.showGame = true
  }
}
