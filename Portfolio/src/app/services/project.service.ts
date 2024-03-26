import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Project } from "../models/project";
import { API } from "../configs/global";
import { Observable } from "rxjs";

@Injectable()
export class ProjectService {
    public url: string
    private readonly headers: HttpHeaders

    constructor (
        private _http: HttpClient
    ) {
        this.url = API
        this.headers = new HttpHeaders().set('Content-Type', 'application/json')
    }

    public saveProject(project: Project): Observable<any> {
      // let params: string = JSON.stringify(project)

      console.log(project)

      return this._http.post(this.url + '/saveproject', project, {headers: this.headers})
    }

    public getProjects(): Observable<any> {
      return this._http.get(this.url + "/getprojects", {headers: this.headers})
    }

    public getProject(id: any): Observable<any> {
      return this._http.get(this.url + "/getproject/" + id, {headers: this.headers})
    }

    public deleteProject(id: any): Observable<any> {
      return this._http.delete(this.url + "/deleteprojects/" + id, {headers: this.headers})
    }
}

