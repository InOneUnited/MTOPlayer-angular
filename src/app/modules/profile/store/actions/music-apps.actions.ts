import { createAction, props } from '@ngrx/store';

import { MusicApp } from '../../../shared/model/music-app';

export const fetchMusicApps = createAction('[music apps] Fetch music apps');

export const fetchMusicAppsSuccess = createAction(
  '[music apps] Fetch music apps success',
  props<{ musicApps: MusicApp[] }>()
);

export const fetchMusicAppsFailure = createAction(
  '[music apps] Fetch music apps failure',
  props<{ failure: any }>()
);

export const addMusicApp = createAction(
  '[music apps] Add new music app',
  props<{ musicApp: MusicApp }>()
);

export const addMusicAppSuccess = createAction(
  '[music apps] Add new music app success',
  props<{ musicApp: MusicApp }>()
);

export const addMusicAppFailure = createAction(
  '[music apps] Add new music app failure',
  props<{ failure: any }>()
);

export const deleteMusicApp = createAction(
  '[music apps] Delete music app',
  props<{ musicApp: MusicApp }>()
);

export const deleteMusicAppSuccess = createAction(
  '[music apps] Delete music app success',
  props<{ musicApp: MusicApp }>()
);

export const deleteMusicAppFailure = createAction(
  '[music apps] Delete music app failure',
  props<{ failure: any }>()
);
