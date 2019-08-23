import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../shared/model/user';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  fetchUserData(userId: number) {
    return new User();
  }
}
