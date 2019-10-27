import { Action, createReducer, on } from '@ngrx/store';

import { initialMusicAppsState, MusicAppsState } from '../states/music-apps.state';
import { fetchMusicApps, addMusicApp, updateIsConnected, deleteMusicApp, fetchMusicAppsSuccess, addMusicAppSuccess, updateIsConnectedSuccess, deleteMusicAppSuccess, fetchMusicAppsFailure, addMusicAppFailure, updateIsConnectedFailure, deleteMusicAppFailure } from '../actions/music-apps.actions';

const reducer = createReducer(
  initialMusicAppsState,
  on(
    fetchMusicApps,
    addMusicApp,
    updateIsConnected,
    deleteMusicApp,
    state => ({
      ...state,
      operationState: 'busy'
    })
  ),

  on(fetchMusicAppsSuccess, (state, { musicApps }) => ({
    ...state,
    currentMusicApps: musicApps,
    operationState: 'success'
  })),

  on(
    addMusicAppSuccess,
    updateIsConnectedSuccess,
    deleteMusicAppSuccess,
    (state, { musicApp }) => ({
      ...state,
      currentMusicApp: musicApp,
      operationState: 'success'
    })
  ),

  on(
    fetchMusicAppsFailure,
    addMusicAppFailure,
    updateIsConnectedFailure,
    deleteMusicAppFailure,
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
