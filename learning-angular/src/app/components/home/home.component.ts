import { Component } from '@angular/core';
import { settings } from "../../models/settings";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public title: string
  public description: string
  public isLogin: boolean

  constructor () {
    this.title = settings.title[0]
    this.description = settings.description[0]
    this.isLogin = false
  }

  public changeTitle = ():void => {
    this.title = 'Página de títulos cambiada'
  }

  public loginSystem = (): void => {
    this.isLogin ? this.isLogin = false : this.isLogin = true
  }
}
