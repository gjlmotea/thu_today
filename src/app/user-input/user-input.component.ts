import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  @Output() public userFormChange = new EventEmitter<FormGroup>();

  userForm = this.fb.group({
    age: 25,
    ageLimit: 125,
    moneyNow: 3000000,
    moneyRate: 7, // return rate
    spendAmount: 22000,
    spendRate: 3, // inflation rate
    incomeAmount: 5000,
    incomeRate: 5,
    ageWorkStart: 30,
    ageWorkEnd: 50,
  });
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  formChanged() {
    this.userFormChange.emit(this.userForm);
  }

}
