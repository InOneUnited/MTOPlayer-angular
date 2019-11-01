import { Component } from '@angular/core';

@Component({
  selector: 'mto-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  chosenOption = 'password';

  onClick(option: string) {
    this.chosenOption = option;
  }
}
