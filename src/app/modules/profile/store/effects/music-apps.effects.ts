import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';

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
      exhaustMap(() => {
        return this.musicAppsService.fetchMusicApps().pipe(
          map(musicApps =>
            MusicAppsActions.fetchMusicAppsSuccess({ musicApps })
          ),
          catchError(error => of(MusicAppsActions.fetchMusicAppsFailure(error)))
        );
      })
    )
  );

  addMusicApp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MusicAppsActions.addMusicApp),
      mergeMap(({ musicApp }) => {
        return this.musicAppsService.addMusicApp(musicApp).pipe(
          map(app => MusicAppsActions.addMusicAppSuccess({ musicApp: app })),
          catchError(error => of(MusicAppsActions.addMusicAppFailure(error)))
        );
      })
    )
  );

  deleteMusicApp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MusicAppsActions.deleteMusicApp),
      mergeMap(({ musicApp }) => {
        return this.musicAppsService.deleteMusicApp(musicApp).pipe(
          map(app => MusicAppsActions.deleteMusicAppSuccess({ musicApp: app })),
          catchError(error => of(MusicAppsActions.addMusicAppFailure(error)))
        );
      })
    )
  );
}
