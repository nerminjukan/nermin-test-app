import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../user.model';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

  user: User;
  id: number;

  constructor(private ActivatedRoute: ActivatedRoute, private Router: Router, private UsersService: UsersService) { }

  ngOnInit() {
    this.ActivatedRoute.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.user = this.UsersService.getUser(this.id);
        }
      );
  }

}
