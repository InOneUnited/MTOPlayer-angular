import { Component, Input } from '@angular/core';

@Component({
    selector: 'mto-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
  })
  export class HeaderComponent {
    @Input() isLoggedIn = false;
    @Input() title = '';
    @Input() userPicture = 'assets/img/profile_picture.jpg';
  }
  