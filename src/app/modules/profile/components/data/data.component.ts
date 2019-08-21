import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'mto-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({});
  }

  onSave() {}
}
