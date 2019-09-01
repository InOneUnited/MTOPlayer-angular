import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ApiLogo, ApiSelect, MusicApp } from '../../../../shared/model/music-app';


@Component({
  selector: 'mto-add-app',
  templateUrl: './add-app.component.html',
  styleUrls: ['./add-app.component.scss']
})
export class AddAppDialogComponent {
  apis = [
    new ApiSelect({ name: 'dropbox', picture: ApiLogo.dropbox }),
    new ApiSelect({ name: 'soundcloud', picture: ApiLogo.soundCloud }),
    new ApiSelect({ name: 'google_drive', picture: ApiLogo.googleDrive }),
    new ApiSelect({ name: 'spotify', picture: ApiLogo.spotify })
  ];

  // temporary as it's strongly dependend on backend which is yet to come.
  chosenApi: ApiSelect;
  login: string;

  constructor(
    public dialogRef: MatDialogRef<AddAppDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ApiSelect
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    const musicApp = new MusicApp({
      id: undefined,
      name: this.chosenApi.name,
      userLogin: this.login,
      isConnected: true
    });

    this.dialogRef.close(musicApp);
  }

  // temporary
  get valid() {
    return this.chosenApi && this.login;
  }
}
