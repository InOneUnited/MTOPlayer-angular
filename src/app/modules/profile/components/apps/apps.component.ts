import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';

import { AppState } from '../../../../store/app.state';
import { Unsubscribeable } from '../../../shared/base/unsubscribeable';
import { MusicApp } from '../../../shared/model/music-app';
import { addMusicApp, fetchMusicApps, updateIsConnected } from '../../store/actions/music-apps.actions';
import { getCurrentMusicApps } from '../../store/selectors/music-apps.selector';
import { AddAppDialogComponent } from './add-app/add-app.component';

@Component({
  selector: 'mto-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent extends Unsubscribeable {
  apps: MusicApp[];

  constructor(private store: Store<AppState>, public dialog: MatDialog) {
    super();

    store.dispatch(fetchMusicApps());
    store
      .select(getCurrentMusicApps)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(musicApps => {
        this.apps = musicApps;
      });
  }

  onConnectedToggle(event: { isConnected: boolean; apiId: number }): void {
    this.store.dispatch(
      updateIsConnected({
        musicAppId: event.apiId,
        isConnected: event.isConnected
      })
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddAppDialogComponent, {
      width: '50vw',
      height: '30vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(addMusicApp({ musicApp: result }));
      }
    });
  }

  get dropboxApps() {
    return this.apps.filter(app => app.name === 'dropbox');
  }

  get spotifyApps() {
    return this.apps.filter(app => app.name === 'spotify');
  }

  get soundcloudApps() {
    return this.apps.filter(app => app.name === 'soundcloud');
  }

  get googleDriveApps() {
    return this.apps.filter(app => app.name === 'google_drive');
  }
}
