import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../user.model';
import { Subscription } from 'rxjs';
import { UsersService } from '../users.service';
import { RouteConfigLoadStart, ActivatedRoute } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {
  users: User[];
  subscription: Subscription;


  constructor(private usersService: UsersService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.subscription = this.usersService.usersChanged
      .subscribe(
        (users: User[]) => {
          this.users = users;
        }
      );
    // this.users = this.usersService.getUsers();

    this.dataStorageService.fetchUsers().subscribe();

    console.log(this.users);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
