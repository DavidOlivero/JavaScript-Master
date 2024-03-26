import { Component } from '@angular/core';
import { OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params, Route } from "@angular/router";
import { ProjectService } from "../../services/project.service";
import { Project } from "../../models/project";
import { API } from "../../configs/global";

@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.css'],
  providers: [ProjectService]
})
export class DetailsProjectComponent implements OnInit {
  public url: string
  public project: Project

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
    ) {
    this.url = API
    this.project = new Project()
  }

  public ngOnInit(): void {
    this._route.params.subscribe({
      next: (params) => {
        const id = params['id'];

        this.getProject(id)
      },

      error: (error) => {
          console.log(error)
      }
    })
  }

  public deleteProjects(id: any) {
    this._projectService.deleteProject(id).subscribe({
      next: response => {
        this._router.navigate(['/projectslist'])
      },

      error: error => {
        console.log(error)
      }
    })
  }

  private getProject(id: string): void {
    this._projectService.getProject(id).subscribe({
      next: (response) => {
        this.project = response.project
      },

      error: (err) => {
        console.log(err)
      }
    })
  }
}
