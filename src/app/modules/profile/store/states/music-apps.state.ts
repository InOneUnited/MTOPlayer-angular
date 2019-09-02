import { MusicApp } from '../../../shared/model/music-app';

export interface MusicAppsState {
  currentMusicApps: MusicApp[];
  currentMusicApp: MusicApp;
  operationState: string;
}

export const initialMusicAppsState: MusicAppsState = {
  currentMusicApps: undefined,
  currentMusicApp: undefined,
  operationState: undefined
};
