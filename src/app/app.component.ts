import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserForm } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'THU Today';
  fv = {} as UserForm;

  constructor() {
  }

  formChange(fg : FormGroup) {
    this.fv = fg.value;
  }
}
