import {Component, OnInit} from '@angular/core';
import { Project } from "src/app/models/project";
import { ProjectService } from 'src/app/services/project.service';
import { UploadServices } from "../../services/upload.service";
import { API } from "../../configs/global";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: '../create-projects/create-projects.component.html',
  styleUrls: ['../create-projects/create-projects.component.css'],
  providers: [ProjectService, UploadServices]
})
export class EditComponent implements OnInit{
  public title: string
  public project: Project
  public status: boolean | null
  public filesToUpload: Array<File>

  constructor(
    private _projectService: ProjectService,
      private _uploadService: UploadServices,
      private _router: Router,
      private _route: ActivatedRoute
  ) {
    this.title = 'Editar proyecto'
    this.project = new Project()
    this.status = null
    this.filesToUpload = []
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

  public onSubmit(forms: NgForm) {
    this._projectService.editProject(this.project).subscribe({
      next: response => {
        const url: string = API + "/uploadimage/" + response.project._id

        this._uploadService.makeFileRequest(url, [], this.filesToUpload, 'image')
          .then(result => {
            console.log(result)

            this.status = true

            setTimeout(() => this.status = null, 2000)
          })

        this._router.navigate(['/projectslist'])
      },
      error: err => {
        console.log(err)
        this.status = null
      }
    })
  }

  public fileChangeEvent(fileInput: any) {
    // Descomentar este código
    if (fileInput.target) {
      this.filesToUpload = fileInput.target.files
    }
  }
}
