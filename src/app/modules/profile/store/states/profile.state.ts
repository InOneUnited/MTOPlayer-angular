import { MusicAppsState } from './music-apps.state';
import { UserState } from './user.state';
import { PasswordDataState } from './password-data.state';

export interface ProfileState {
  userState: UserState;
  musicAppsState: MusicAppsState;
  passwordDataState: PasswordDataState;
}
