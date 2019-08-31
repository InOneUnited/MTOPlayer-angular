import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { AppState } from '../../../../store/app.state';
import { Unsubscribeable } from '../../../shared/base/unsubscribeable';
import { MusicApp } from '../../../shared/model/music-app';
import { fetchMusicApps } from '../../store/actions/music-apps.actions';
import { getCurrentMusicApps } from '../../store/selectors/music-apps.selector';

@Component({
  selector: 'mto-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent extends Unsubscribeable {
  apps: MusicApp[];

  constructor(private store: Store<AppState>) {
    super();

    store.dispatch(fetchMusicApps());
    store
      .select(getCurrentMusicApps)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(musicApps => {
        this.apps = musicApps;
      });
  }
}
