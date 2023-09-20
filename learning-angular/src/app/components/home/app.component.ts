import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string
  public showGame: boolean

  constructor() {
    this.title = 'Aprendiendo Angular'
    this.showGame = true
  }

  public changeGameVisibility = (): void  => {
    this.showGame ? this.showGame = false : this.showGame = true
  }
}
