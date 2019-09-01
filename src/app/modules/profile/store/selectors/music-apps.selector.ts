import { createSelector } from '@ngrx/store';

import { MusicAppsState } from '../states/music-apps.state';
import { ProfileState } from '../states/profile.state';
import { getProfileState } from './profile.selector';

export const getMusicAppsState = createSelector(
  getProfileState,
  (state: ProfileState) => state && state.musicAppsState
);

export const getCurrentMusicApps = createSelector(
  getMusicAppsState,
  (state: MusicAppsState) => state && state.currentMusicApps
);

export const getCurrentMusicApp = createSelector(
  getMusicAppsState,
  (state: MusicAppsState) => state && state.currentMusicApp
);

export const getUpdateMusicAppsOperationState = createSelector(
  getMusicAppsState,
  (state: MusicAppsState) => state.operationState
);
