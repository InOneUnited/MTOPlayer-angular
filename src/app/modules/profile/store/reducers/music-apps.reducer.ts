import { Action, createReducer, on } from '@ngrx/store';

import * as MusicAppsActions from '../actions/music-apps.actions';
import { initialMusicAppsState, MusicAppsState } from '../states/music-apps.state';

const reducer = createReducer(
  initialMusicAppsState,
  on(
    MusicAppsActions.fetchMusicApps,
    MusicAppsActions.addMusicApp,
    MusicAppsActions.deleteMusicApp,
    state => ({
      ...state,
      operationState: 'busy'
    })
  ),

  on(MusicAppsActions.fetchMusicAppsSuccess, (state, { musicApps }) => ({
    ...state,
    currentMusicApps: musicApps,
    operationState: 'success'
  })),

  on(
    MusicAppsActions.addMusicAppSuccess,
    MusicAppsActions.deleteMusicApp,
    (state, { musicApp }) => ({
      ...state,
      currentMusicApp: musicApp,
      operationState: 'success'
    })
  ),

  on(
    MusicAppsActions.fetchMusicAppsFailure,
    MusicAppsActions.addMusicAppFailure,
    MusicAppsActions.deleteMusicAppSuccess,
    state => ({
      ...state,
      operationState: 'error'
    })
  )
);

export function musicAppsReducer(
  state: MusicAppsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
