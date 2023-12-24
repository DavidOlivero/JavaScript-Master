import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Project } from "../models/project";
import { API } from "../configs/global";
import { Observable } from "rxjs";

@Injectable()
export class ProjectService {
    public url: string

    constructor (
        private _http: HttpClient
    ) {
        this.url = API
    }

    public saveProject(project: Project): Observable<any> {
        let params: string = JSON.stringify(project)
        let headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.post(this.url + '/saveproject', params, {headers: headers})
    }

    public getProject(): Observable<any> {
        const headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application(json')

        return this._http.get(this.url + "/getprojects", {headers: headers})
    }
}

