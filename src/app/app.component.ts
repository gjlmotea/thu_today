import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thu_today';

  constructor() {
  }

  formChange(fg : FormGroup) {
    console.log('formChange', fg.value)
  }
}
