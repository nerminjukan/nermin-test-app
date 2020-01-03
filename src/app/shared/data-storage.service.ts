import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { UsersService } from '../users/users.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private usersService: UsersService
  ) {}

  fetchUsers() {
    return this.http
      .get<any>(
        'https://reqres.in/api/users?per_page=10'
      )
      .pipe(
        tap(users => {
            console.log(users.data);
            this.usersService.setUsers(users.data);
        })
      );
  }
}
