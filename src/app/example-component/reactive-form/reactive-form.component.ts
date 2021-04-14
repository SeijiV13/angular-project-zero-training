import { User } from 'src/app/shared/models/User';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  userForm: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ["", [Validators.required, Validators.maxLength(50)]],
      age: ["", [Validators.required]],
      active :[""],
    });
    this.listenToForm();
  }

  listenToForm() {
    this.userForm.valueChanges.subscribe((data: User) => {
    })
  }

  submitForm() {
    const nameError = (<FormControl>this.userForm.controls["name"]).errors;
    const ageError = (<FormControl>this.userForm.controls["age"]).errors;
    const formValue: User = this.userForm.value;
    const form2Value: User = this.userForm.getRawValue();
    console.log(formValue);
    console.log(form2Value);
    console.log(nameError);
    console.log(ageError);
  }

}
