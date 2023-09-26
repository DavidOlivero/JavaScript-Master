import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ExternalApi {
    public url: string

    constructor(
        private _http: HttpClient
    ) {
        this.url = 'https://reqres.in'
    }

    public getUser(page:string): Observable<any> {
        return this._http.get(this.url + '/api/users?page=' + page)
    }
}