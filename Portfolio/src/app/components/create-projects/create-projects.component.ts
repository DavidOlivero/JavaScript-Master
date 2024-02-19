import { Component, EventEmitter } from '@angular/core';
import { Project } from "src/app/models/project";
import { ProjectService } from 'src/app/services/project.service';
import { UploadServices } from "../../services/upload.service";
import { API } from "../../configs/global";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-create-projects',
  templateUrl: './create-projects.component.html',
  styleUrls: ['./create-projects.component.css'],
  providers: [ProjectService, UploadServices]
})

export class CreateProjectsComponent {
  public title: string
  public project: Project
  public status: boolean | null
  public filesToUpload: Array<File>

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadServices
  ) {
    this.title = 'Crear projecto'
    this.project = new Project()
    this.status = null
    this.filesToUpload = []
  }

  public onSubmit(forms: NgForm) {
    // Guardar datos básicos 
    console.log(this.project)
    
    this._projectService.saveProject(this.project).subscribe(
      {
        next: response => {
          console.log(response)

          // Subir la imagen
          const url: string = API + "/uploadimage/" + response.project._id
          console.log(url)

          this._uploadService.makeFileRequest(url, [], this.filesToUpload, 'image')
          .then(result => {
              console.log(result)
              
              this.status = true

              setTimeout(() => this.status = null, 2000)
            })
        },
        error: error => {
          console.log(<any> error)
          this.status = null
        }
      }
    )

    forms.reset()
  }

  public fileChangeEvent(fileInput: any) {
    // Descomentar este código
    if (fileInput.target) {
      this.filesToUpload = fileInput.target.files
    }
  }
}
