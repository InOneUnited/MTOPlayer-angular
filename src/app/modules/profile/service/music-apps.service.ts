import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { MusicApp } from '../../shared/model/music-app';

@Injectable()
export class MusicAppsService {
  musicApps: MusicApp[] = [
    new MusicApp({
      id: 1,
      name: 'dropbox',
      userLogin: 'dodo@dudu.pl',
      isConnected: false
    }),
    new MusicApp({
      id: 2,
      name: 'google_drive',
      userLogin: 'dodo@dudu.pl',
      isConnected: false
    }),
    new MusicApp({
      id: 3,
      name: 'spotify',
      userLogin: 'kakafonia@co2.pl',
      isConnected: false
    }),
    new MusicApp({
      id: 4,
      name: 'soundcloud',
      userLogin: 'fakemail@fake.eu',
      isConnected: false
    })
  ];

  constructor(private http: HttpClient) {}

  fetchMusicApps() {
    console.log('service');
    return of(this.musicApps);
  }
}
