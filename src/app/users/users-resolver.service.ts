import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { User } from './user.model';
import { DataStorageService } from '../shared/data-storage.service';
import { UsersService } from './users.service';

@Injectable({ providedIn: 'root' })
export class UsersResolverService implements Resolve<User[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipesService: UsersService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const users = this.recipesService.getUsers();

    if (users.length === 0) {
      return this.dataStorageService.fetchUsers();
    } else {
      return users;
    }
  }
}
