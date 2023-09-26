import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ExternalApi {
    private url: string

    constructor(
        private _http: HttpClient
    ) {
        this.url = 'https://reqres.in'
    }

    public getUser(page:string): Observable<any> {
        return this._http.get(this.url + '/api/users?page=' + page)
    }

    public addUser(user: any): Observable<any> {
        const params: string = JSON.stringify(user)
        const headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.post(this.url + '/api/user', params, {headers: headers})
    }
}