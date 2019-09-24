import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';

import { MusicAppsService } from '../../service/music-apps.service';
import { fetchMusicApps, fetchMusicAppsSuccess, fetchMusicAppsFailure, addMusicApp, addMusicAppSuccess, addMusicAppFailure, deleteMusicApp, deleteMusicAppSuccess, deleteMusicAppFailure, updateIsConnected, updateIsConnectedSuccess, updateIsConnectedFailure } from '../actions/music-apps.actions';

@Injectable()
export class MusicAppsEffects {
  constructor(
    private actions$: Actions,
    private musicAppsService: MusicAppsService
  ) {}

  fetchMusicApps$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchMusicApps),
      exhaustMap(() => {
        return this.musicAppsService.fetchMusicApps().pipe(
          map(musicApps =>
            fetchMusicAppsSuccess({ musicApps })
          ),
          catchError(error => of(fetchMusicAppsFailure(error)))
        );
      })
    )
  );

  addMusicApp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addMusicApp),
      mergeMap(({ musicApp }) => {
        return this.musicAppsService.addMusicApp(musicApp).pipe(
          map(app => addMusicAppSuccess({ musicApp: app })),
          catchError(error => of(addMusicAppFailure(error)))
        );
      })
    )
  );

  deleteMusicApp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteMusicApp),
      mergeMap(({ musicAppId }) => {
        return this.musicAppsService.deleteMusicApp(musicAppId).pipe(
          map(app => deleteMusicAppSuccess({ musicApp: app })),
          catchError(error => of(deleteMusicAppFailure(error)))
        );
      })
    )
  );

  updateMusicApp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateIsConnected),
      mergeMap(({ musicAppId, isConnected }) => {
        return this.musicAppsService
          .updateIsConnected(musicAppId, isConnected)
          .pipe(
            map(app =>
              updateIsConnectedSuccess({ musicApp: app })
            ),
            catchError(error =>
              of(updateIsConnectedFailure(error))
            )
          );
      })
    )
  );
}
