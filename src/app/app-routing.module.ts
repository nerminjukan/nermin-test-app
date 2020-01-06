import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { UsersListStartComponent } from './users/users-list-start/users-list-start.component';
import { UsersDetailComponent } from './users/users-detail/users-detail.component';
import { UsersComponent } from './users/users.component';
import { UsersResolverService } from './users/users-resolver.service';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard], children: [
    { path: '', component: UsersListStartComponent },
    { path: ':id', component: UsersDetailComponent, resolve: [UsersResolverService] },
  ] },
  { path: 'auth', component: AuthComponent },
  { path: '**', redirectTo: '/users'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
