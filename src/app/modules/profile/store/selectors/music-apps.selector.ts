import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MusicAppsState } from '../states/music-apps.state';

export const getMusicAppsState = createFeatureSelector<MusicAppsState>(
  'music-apps'
);

export const getCurrentMusicApps = createSelector(
  getMusicAppsState,
  (state: MusicAppsState) => state && state.currentMusicApps
);

export const getUpdateMusicAppsOperationState = createSelector(
  getMusicAppsState,
  (state: MusicAppsState) => state.operationState
);
