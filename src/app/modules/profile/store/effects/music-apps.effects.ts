import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { MusicAppsService } from '../../service/music-apps.service';
import * as MusicAppsActions from '../actions/music-apps.actions';

@Injectable()
export class MusicAppsEffects {
  constructor(
    private actions$: Actions,
    private musicAppsService: MusicAppsService
  ) {}

  fetchMusicApps$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MusicAppsActions.fetchMusicApps),
      switchMap(() => {
        return this.musicAppsService.fetchMusicApps().pipe(
          map(musicApps =>
            MusicAppsActions.fetchMusicAppsSuccess({ musicApps })
          ),
          catchError(error => of(MusicAppsActions.fetchMusicAppsFailure(error)))
        );
      })
    )
  );
}
