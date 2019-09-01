export enum ApiLogo {
  dropbox = 'assets/img/logo/dropbox.jpg',
  googleDrive = 'assets/img/logo/googledrive.png',
  soundCloud = 'assets/img/logo/soundcloud.png',
  spotify = 'assets/img/logo/spotify.png'
}

export class ApiSelect {
  name?: string = undefined;
  picture?: string = undefined;

  constructor(fields?: { name?: string; picture?: string }) {
    Object.assign(this, fields);
  }
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
