import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HomeComponent } from './post/home/home.component';
import { IndexComponent } from './post/index/index.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'home', component:HomeComponent },
  { path: 'index', component:IndexComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}