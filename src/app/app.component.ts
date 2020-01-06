import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'nermin-test-app';


  constructor(private translate: TranslateService, private authService: AuthService) {
    translate.setDefaultLang('en');
  }

  ngOnInit (){
    this.authService.autoLogin();
  }
}
