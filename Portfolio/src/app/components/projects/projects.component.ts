import { Component } from '@angular/core';
import { OnInit } from "@angular/core";
import { ProjectService } from "../../services/project.service";
import { Project } from "../../models/project";
import { API } from "../../configs/global";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  public projects: Project[]
  public url: string

  constructor(
    private _projectService: ProjectService
  ){
    this.projects = []

    this.url = API
  }

  public ngOnInit(): void {
    this.getProject()
  }

  public getProject() {
    this._projectService.getProjects().subscribe(
      {
        next: (response: any) => {
          response.projects.forEach((element: Project) => {
            if (element) {
              this.projects.push(element)
            }
          });
        },
        error: (error: any) => {
          console.log(error)
        }
      }
    )
  }
}
