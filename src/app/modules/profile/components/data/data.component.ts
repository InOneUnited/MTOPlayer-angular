import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
  selector: 'mto-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {
  joinDateValue = new Date();
  form: FormGroup;
  userPicture: string;
  email = 'ddd@o2.pl';
  constructor(private fb: FormBuilder) {
    this.form = this.createFormGroup();
  }
  onFileSelected(event) {
    console.log(event);
  }

  private createFormGroup() {
    return this.fb.group({
      firstName: [''],
      lastName: [''],
      gender: [''],
      birthday: [undefined]
    });
  }

  onSave() {}
}
