import { Component } from '@angular/core';

@Component({
  selector: 'mto-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  chosenOption = 'apps';

  onClick(option: string) {
    this.chosenOption = option;
  }
}
