import { User } from 'src/app/shared/models/User';

import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  userForm: FormGroup
  submitted = false;

  formData = {
    fullName: {
      firstName: '',
      lastName: ''
    },
    age: '',
    active: '',
    dependents: [
      { fullName: '', age: '', active: '' }
    ]
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // FormBuilder approach for creating Reactive Forms
    // this.initializedFormByFormBuilder();
    // =================================================================
    // FormGroup instantiation for creating Reactive Forms
    this.initializedFormByFormGroup();
  }

  // getters to return form group instance and perform some validation logics
  public get isfullNameCtrlValid() {
    const fullNameGroup = this.userForm.get('fullName');
    if (!fullNameGroup.valid && fullNameGroup.touched) {
      return false;
    }
    return true;
  }

  public get isAgeCtrlValid() {
    const ageCtrl = this.userForm.get('age');
    if (!ageCtrl.valid && ageCtrl.touched) {
      return false;
    }
    return true;
  }

  // Create/Initialize a form via FormBuilder
  initializedFormByFormBuilder() {
    this.userForm = this.fb.group({
      fullName: this.fb.group({
        firstName: ["", [Validators.required, Validators.maxLength(50)]],
        lastName: ["", [Validators.required, Validators.maxLength(50)]]
      }),
      age: ["", [Validators.required]],
      active :[""],
      dependents: this.fb.array([this.createDependentsCtrlArray()])
    });
  }

  // Create/Initialize a form via FormGroup/FormControl/FormArray instance
  initializedFormByFormGroup() {
    this.userForm = new FormGroup({
      fullName: new FormGroup({
        firstName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
        lastName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      }),
      age: new FormControl('', [Validators.required]),
      active: new FormControl(''),
      dependents: new FormArray([this.createDependentsCtrlArray()])
    });
  }


  setOrPatchUserFormValues() {
    /**
     * Take Note: userForm.setValue() need to pass the same object structure and it will override the user inputted values
     *            use userForm.patchValue() instead if we want to patch only a single control value
     */
    // Set Value:
    // this.userForm.setValue({
    //   fullName: {
    //     firstName: 'Glenn',
    //     lastName: 'Olazo'
    //   },
    //   age: 20,
    //   active: false
    //   dependents: [
    //     { fullName: '', age: '', active: '' }
    //   ]
    // });
    // Patch Value:
    // this.userForm.patchValue({
    //   name: 'Seiji',
    // });
  }

  public get dependentsFormArrayCtrl() {
    return this.userForm.get('dependents') as FormArray;
  }

  // Form Array Initialization
  createDependentsCtrlArray(): FormGroup {
    // FormBuilder approach for creating Reactive FormGroup
    // return this.fb.group({
    //   fullName: '',
    //   age: '',
    //   active: ''
    // });
    //
    return new FormGroup({
      fullName: new FormControl(''),
      age: new FormControl(''),
      active: new FormControl('')
    });
  }

  // Form Array Add Single Form Group
  public addItem(): void {
    this.dependentsFormArrayCtrl.push(this.createDependentsCtrlArray());
  }

  // Form Array Remove Single Form Group
  public removeItem() {
      this.dependentsFormArrayCtrl.removeAt(this.dependentsFormArrayCtrl.length - 1);
  }

 // Form Submission
  submitForm() {
    // const nameError = (<FormControl>this.userForm.controls["name"]).errors;
    // const ageError = (<FormControl>this.userForm.controls["age"]).errors;
    const formValue: User = this.userForm.value;
    const form2Value: User = this.userForm.getRawValue();
    // console.log(formValue);
    // console.log(form2Value);
    // console.log(nameError);
    // console.log(ageError);

    this.submitted = true;
    this.formData = this.userForm.value;
    console.log("FORM VALUE", this.userForm.value);
  }
 // FormState
  onResetForm() {
    this.submitted = false;
    /**
     * Optionally re-invoke this form initialization method to set the initial form instance
     * to remove as well the previously added form array control.
     */
    // this.initializedFormByFormGroup();
    this.userForm.reset();
  }
}
