import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { PasswordData } from '../../shared/model/password-data';

@Injectable()
export class PasswordDataService {
  passwordData = new PasswordData({
    id: 1,
    email: 'jan_kowalski111@MatLine.pl',
    password: 'tajnehaslo123'
  });

  constructor(private http: HttpClient) {}

  fetchPasswordData() {
    return of(this.passwordData);
  }

  updatePasswordData(updatedPasswordData: PasswordData) {
    this.passwordData = updatedPasswordData;

    return of(this.passwordData);
  }
}
