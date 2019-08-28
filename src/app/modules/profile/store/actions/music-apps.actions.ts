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
