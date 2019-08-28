import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { MusicApp } from '../../shared/model/music-app';

@Injectable()
export class MusicAppsService {
  musicApps: MusicApp[] = [
    new MusicApp({
      id: 1,
      name: 'Dropbox',
      isConnected: false
    }),
    new MusicApp({
      id: 2,
      name: 'Google Drive',
      isConnected: false
    }),
    new MusicApp({
      id: 3,
      name: 'Spotify',
      isConnected: false
    }),
    new MusicApp({
      id: 4,
      name: 'SoundCloud',
      isConnected: false
    })
  ];

  constructor(private http: HttpClient) {}

  fetchMusicApps() {
    return of(this.musicApps);
  }
}
