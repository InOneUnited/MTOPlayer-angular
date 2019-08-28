import { Action, createReducer, on } from '@ngrx/store';
import * as MusicAppsActions from '../actions/music-apps.actions';
import {
  initialMusicAppsState,
  MusicAppsState
} from '../states/music-apps.state';

const reducer = createReducer(
  initialMusicAppsState,
  on(MusicAppsActions.fetchMusicAppsSuccess, (state, { musicApps }) => ({
    ...state,
    currentMusicApps: musicApps
  })),

  on(
    MusicAppsActions.fetchMusicAppsFailure,
    MusicAppsActions.fetchMusicAppsFailure,
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
