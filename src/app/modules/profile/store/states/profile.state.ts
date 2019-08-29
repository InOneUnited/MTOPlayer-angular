import { MusicAppsState } from './music-apps.state';
import { UserState } from './user.state';

export interface ProfileState {
  userState: UserState;
  musicAppsState: MusicAppsState;
}
