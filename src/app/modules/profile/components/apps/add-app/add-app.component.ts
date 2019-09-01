import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { MusicApp } from '../../../../shared/model/music-app';

@Component({
  selector: 'mto-add-app',
  templateUrl: './add-app.component.html',
  styleUrls: ['./add-app.component.scss']
})
export class AddAppDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddAppDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MusicApp
  ) {}

  ppl = ['hello', 'hey', 'hello'];
  onNoClick(): void {
    this.dialogRef.close();
  }
}
