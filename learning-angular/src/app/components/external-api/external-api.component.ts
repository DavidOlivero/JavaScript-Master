import { Component, OnInit, DoCheck } from '@angular/core';
import { ExternalApi } from "../../services/externalapi.services";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

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
  public date: Date
  public newUser: {
    first_name: string,
    last_name: string,
    job: string,
    avatar: string
    email: string
  }

  public userAdded: {
    first_name: "",
    last_name: '',
    job: "",
    avatar: '',
    email: ''
  }
  
  constructor(
    private _externalApi: ExternalApi,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.users = new Array()
    this.page = '1'
    this.previousUrl = ''
    this.date = new Date()
    this.newUser = {
      first_name: "",
      last_name: '',
      job: "",
      avatar: '',
      email: ''
    }

    this.userAdded = {
      first_name: "",
      last_name: '',
      job: "",
      avatar: '',
      email: ''
    }
  }

  private loadPage(): void {
    this._externalApi.getUser(this.page).subscribe(
      ({ data }) => {
        this.users = data
      },
      error => {
        console.log(<HttpErrorResponse>error)
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

  public getPage(): number {
    return parseInt(this.page)
  }

  public createUser(form: NgForm): void {
    this._externalApi.addUser(this.newUser).subscribe(
      (value) => {
        if (!value.avatar) value.avatar = 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1695764951~exp=1695765551~hmac=3c1c8e20a47657d2d5bf5dbf91724a141f5c1eba243feed1dfe13eae266dd063'
        
        this.userAdded = value

        form.reset()
      },
      (error) => {
        console.log(<any>error)
      }
    )
  }
}
