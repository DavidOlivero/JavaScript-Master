import { Component, OnInit, DoCheck } from '@angular/core';
import { ExternalApi } from "../../services/externalapi.services";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-external-api',
  templateUrl: './external-api.component.html',
  styleUrls: ['./external-api.component.css'],
  providers: [ExternalApi]
})
export class ExternalApiComponent implements OnInit, DoCheck {
  public users : Array<any>
  public page: string
  public previousUrl: string
  
  constructor(
    private _externalApi: ExternalApi,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.users = new Array()
    this.page = '0'
    this.previousUrl = ''
  }

  private loadPage(): void {
    this._externalApi.getUser(this.page).subscribe(
      ({ data }) => {
        this.users = data
      },
      error => {
        console.log(<any>error)
      }
    )
  }

  ngOnInit(): void {
    this._router.navigate(['externalapi', '1'])
    
    this._route.params.subscribe(({ page }) => {
      page ? this.page = page : ''
    })

    this.loadPage()
  }

  ngDoCheck(): void {
    const currentlyUrl: string = this._router.url

    if (currentlyUrl !== this.previousUrl) {
      this.loadPage()
    }

    this.previousUrl = currentlyUrl
  }

  public passPage(to: string): void {
    const actualPage: number = parseInt(this.page)

    if (to === 'left' && actualPage >= 2) {
      this.page = (actualPage - 1).toString()
    } else if (to === 'rigth' && actualPage <= 1) {
      this.page = (actualPage + 1).toString()
    }

    this._router.navigate(['externalapi', this.page])
  }
}
