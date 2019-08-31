import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';

import { AppState } from '../../../../store/app.state';
import { Unsubscribeable } from '../../../shared/base/unsubscribeable';
import { MusicApp } from '../../../shared/model/music-app';
import { fetchMusicApps } from '../../store/actions/music-apps.actions';
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

  openDialog(): void {
    const dialogRef = this.dialog.open(AddAppDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
