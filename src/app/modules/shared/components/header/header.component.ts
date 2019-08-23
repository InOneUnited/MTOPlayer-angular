import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mto-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isLoggedIn = false;
  @Input() title = 'Example Title';
  @Input() userPicture = 'assets/img/profile_picture.jpg';

  @Output()
  public loginOutput = new EventEmitter<MouseEvent>();

  public showLoginPopUp(event: MouseEvent) {
    this.loginOutput.emit(event);
  }
}
