import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../users/users.service';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  currentLang: string;


  constructor(private usersService: UsersService,
              private dataStorageService: DataStorageService,
              private authService: AuthService,
              private translate: TranslateService) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });

    this.currentLang = this.translate.getDefaultLang();
    console.log(this.currentLang);

  }

  logUsers() {
    console.log(this.usersService.getUsers());
  }

  onLogout() {
    this.authService.logout();
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.currentLang = language;
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
