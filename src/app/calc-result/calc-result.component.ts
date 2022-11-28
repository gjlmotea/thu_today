import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-result',
  templateUrl: './calc-result.component.html',
  styleUrls: ['./calc-result.component.css']
})
export class CalcResultComponent implements OnInit {
  @Input() formValues: Object = {};
  constructor() { }

  ngOnInit(): void {
  }

}
