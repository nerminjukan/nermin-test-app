import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersListStartComponent } from './users/users-list-start/users-list-start.component';
import { UsersDetailComponent } from './users/users-detail/users-detail.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users/users.service';
import { UserItemComponent } from './users/users-list/user-item/user-item.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DataStorageService } from './shared/data-storage.service';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    UsersListComponent,
    HeaderComponent,
    UsersListStartComponent,
    UsersDetailComponent,
    UsersComponent,
    UserItemComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
