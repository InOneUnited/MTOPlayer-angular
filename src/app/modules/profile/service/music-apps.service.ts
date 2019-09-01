import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MusicApp } from '../../shared/model/music-app';

@Injectable()
export class MusicAppsService {
  musicApps: MusicApp[] = [
    new MusicApp({
      id: 0,
      name: 'dropbox',
      userLogin: 'dodo@dudu.pl',
      isConnected: false
    }),
    new MusicApp({
      id: 1,
      name: 'google_drive',
      userLogin: 'dodo@dudu.pl',
      isConnected: false
    }),
    new MusicApp({
      id: 2,
      name: 'spotify',
      userLogin: 'kakafonia@co2.pl',
      isConnected: false
    }),
    new MusicApp({
      id: 3,
      name: 'soundcloud',
      userLogin: 'fakemail@fake.eu',
      isConnected: false
    }),
    new MusicApp({
      id: 4,
      name: 'dropbox',
      userLogin: 'dada@dodo.ee',
      isConnected: false
    }),
  ];

  constructor(private http: HttpClient) {}

  fetchMusicApps(): Observable<MusicApp[]> {
    return of(this.musicApps);
  }

  addMusicApp(musicApp: MusicApp) {
    musicApp.id = this.musicApps.length;
    this.musicApps.push(musicApp);
    return of(musicApp);
  }

  deleteMusicApp(musicAppId: number) {
    const index = this.musicApps.findIndex(app => app.id === musicAppId);
    const musicApp = this.musicApps[index];
    this.musicApps.splice(index, 1);
    return of(musicApp);
  }

  updateIsConnected(musicAppId: number, isConnected: boolean) {
    const index = this.musicApps.findIndex(app => app.id === musicAppId);
    this.musicApps[index].isConnected = isConnected;
    const musicApp = this.musicApps[index];

    return of(musicApp);
  }
}
