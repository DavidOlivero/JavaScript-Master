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

  constructor () {
    this.title = settings.title[0]
    this.description = settings.description[0]
  }

  public changeTitle = ():void => {
    this.title = 'Página de títulos cambiada'
  }
}
