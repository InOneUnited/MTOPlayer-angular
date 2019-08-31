export enum ApiLogo {
  dropbox = 'src/assets/img/logo/dropbox.jpg',
  googleDrive = 'src/assets/img/logo/googledrive.png',
  soundCloud = 'src/assets/img/logo/soundcloud.png',
  spotify = 'src/assets/img/logo/spotify.png'
}

export class MusicApp {
  id: number = undefined;
  name: string = undefined;
  userLogin: string = undefined;
  isConnected: boolean = undefined;

  constructor(fields?: {
    id?: number;
    name?: string;
    userLogin?: string;
    isConnected?: boolean;
  }) {
    if (fields) {
      Object.assign(this, fields);
    }
  }

  get userLogo(): ApiLogo {
    switch (this.name) {
      case 'dropbox': {
        return ApiLogo.dropbox;
      }
      case 'google_drive': {
        return ApiLogo.googleDrive;
      }
      case 'spotify': {
        return ApiLogo.spotify;
      }
      case 'soundcloud': {
        return ApiLogo.soundCloud;
      }
    }
  }
}