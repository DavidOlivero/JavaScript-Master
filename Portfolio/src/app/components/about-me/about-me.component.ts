import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  public title: string
  public description: string
  public mail: string

  constructor () {
    this.title = 'David Olivero'
    this.description = 'Desarrollador FullStack'
    this.mail = 'deoliverod@unadvirtual.edu.co'
  }
}
