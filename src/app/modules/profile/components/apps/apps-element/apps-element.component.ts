import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MusicApp } from '../../../../shared/model/music-app';

@Component({
  selector: 'mto-apps-element',
  templateUrl: './apps-element.component.html',
  styleUrls: ['./apps-element.component.scss']
})
export class AppsElementComponent implements OnInit {
  @Input() apps: MusicApp[];
  @Output() isConnectedValueChanged = new EventEmitter<{
    isConnected: boolean;
    apiId: number;
  }>();

  appName: string;
  appLogo: string;

  ngOnInit(): void {
    this.appLogo = this.apps[0].userLogo;
    this.appName = this.apps[0].name;
  }

  onChangeToggle(toggleValue: boolean, id: number) {
    this.isConnectedValueChanged.emit({ isConnected: toggleValue, apiId: id });
  }

  get isMoreThanOne(): boolean {
    return this.apps.length > 1;
  }
}
