import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  @Output() public userFormChange = new EventEmitter<FormGroup>();

  userForm = this.fb.group({
    name: ['勇者一號', [Validators.required]],
    age: [25, [Validators.required, Validators.min(5), Validators.max(120)]],
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
    this.userFormChange.emit(this.userForm);
  }

  formChanged() {
    this.userFormChange.emit(this.userForm);
  }
}
//
// export interface UserForm {
//   age: number
//   ageLimit: number
//   moneyNow: number
//   moneyRate: number
//   spendAmount: number
//   spendRate: number
//   incomeAmount: number,
//   incomeRate: number,
//   ageWorkStart: number,
//   ageWorkEnd: number,
// }
