import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MusicApp } from '../../../../shared/model/music-app';

@Component({
  selector: 'mto-apps-element',
  templateUrl: './apps-element.component.html',
  styleUrls: ['./apps-element.component.scss']
})
export class AppsElementComponent {
  @Input() apps: MusicApp[];
  @Output() isConnectedValueChanged = new EventEmitter<{
    isConnected: boolean;
    apiId: number;
  }>();

  onChangeToggle(toggleValue: boolean, id: number) {
    this.isConnectedValueChanged.emit({ isConnected: toggleValue, apiId: id });
  }

  get isMoreThanOne(): boolean {
    console.log(this.apps.length);
    return this.apps.length > 1;
  }
}
