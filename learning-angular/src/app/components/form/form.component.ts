import { Component } from '@angular/core';
import { ContactUser } from "../../models/contact.user";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  public contactUser: ContactUser

  constructor() {
    this.contactUser = new ContactUser('', '', '', '')
  }

  public onSubmit(form: NgForm): void {
    console.log(this.contactUser)
    form.reset()
  }
}
