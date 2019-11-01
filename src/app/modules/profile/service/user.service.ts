import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from '../../shared/model/user';

@Injectable()
export class UserService {
  user = new User({
    id: 1,
    email: 'jan_kowalski111@MatLine.pl',
    firstName: 'Jan',
    lastName: 'Kowalski',
    gender: 'chłop',
    picture: 'assets/img/profile_picture.jpg',
    birthday: new Date(1980, 2, 25),
    joinDate: new Date(2018, 5, 15)
  });

  constructor(private http: HttpClient) {}

  fetchUser() {
    return of(this.user);
  }

  updateUser(updatedUser: User) {
    this.user = updatedUser;

    return of(this.user);
  }
}
