import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from '../../shared/model/user';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  fetchUserData(userId: number) {
    return of(
      new User({
        id: userId,
        email: 'jan_kowalski111@MatLine.pl',
        firstName: 'Jan',
        lastName: 'Kowalski',
        gender: 'chłop',
        userPicture: 'profile_picture.jpg',
        birthday: new Date(1980, 2, 25),
        joinDate: new Date(2018, 5, 15)
      })
    );
  }
}
