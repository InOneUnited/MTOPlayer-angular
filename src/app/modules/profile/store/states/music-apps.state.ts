import { MusicApp } from '../../../shared/model/music-app';

export interface MusicAppsState {
  currentMusicApps: MusicApp[];
  operationState: string;
}

export const initialMusicAppsState: MusicAppsState = {
  currentMusicApps: undefined,
  operationState: undefined
};
