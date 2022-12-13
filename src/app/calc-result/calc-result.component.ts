import { Component, Input, OnInit } from '@angular/core';
import { UserForm } from '../user-input/user-input.component';

@Component({
  selector: 'app-calc-result',
  templateUrl: './calc-result.component.html',
  styleUrls: ['./calc-result.component.css']
})
export class CalcResultComponent implements OnInit {
  @Input() formValues = {} as UserForm;
  constructor() { }

  ngOnInit(): void {
  }

}
