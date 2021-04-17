import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  /**
   * Use this ViewChild decorator to get access to the template reference variable
   *
   */
  @ViewChild('userForm', { static: true, read: NgForm }) userFormGroup: NgForm;
  newDate = new Date();

  /**
   * Optional if we want to process this variable to check some logics
   * before sending this to the API
   */
  formData = {
    name: '',
    age: '',
    active: ''
  };
  submitted = false;

  constructor() { }

  ngOnInit(): void {
    // this.setOrPatchFormValue();  // Uncomment this if you choose Option 2 to set/patch form value
  }

  onTDFormSubmit() {
    this.submitted = true;

    // Option 1: Store the form value on a local variable of same type/shape as form object.
    // this.formData = this.userFormGroup.value

    // Option 2: Store each form control value in object literal of same type/shape as form object.
    this.formData.name = this.userFormGroup.value.name;
    this.formData.age = this.userFormGroup.value.age;
    this.formData.active = this.userFormGroup.value.active;

    // Log the form value.
    console.log("TEMPLATE DRIVEN FORM", this.userFormGroup.value);

    // Send this formData to the API endpoint using service.
    // TODO: Create a service to process form values.
  }

  onResetForm() {
    /**
     * Reset the form values and to its initial state
     *
     * Note:
     *  Ideally you will invoke this reset method after
     *  submitting the form to return to its initial state
     */
    this.submitted = false;
    this.userFormGroup.reset();
  }

  /**
   * Option: 2
   * Use this approach if we want to set/patch form values to our form controls
   *
   * Take Note: userFormGroup.setValue() need to pass the same object structure and it will override the user inputted values
   *            use userFormGroup.form.patchValue() instead if we want to patch only a single control value
   */
  setOrPatchFormValue() {
    // To use this option: Uncomment the codes below and as well as the method inside ngOnInit.
    // Remove the property binding for each control in the template (for instance: <input ... ngModel>)
    // Set Value:
    // setTimeout(() => {     // Setting form values inside setTimeout to fix the userFormGroup undefined issue
    //   this.userFormGroup.setValue({
    //     name: 'Glenn',
    //     age: 29,
    //     active: true
    //   });
    // }, 0);
    // ==========================================================================================================
    // Patch Value:
    // setTimeout(() => {     // Setting form values inside setTimeout to fix the userFormGroup undefined issue
    //   this.userFormGroup.form.patchValue({
    //     name: 'Seiji'
    //   });
    // }, 0);
  }

}
