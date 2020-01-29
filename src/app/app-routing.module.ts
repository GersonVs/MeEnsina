import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { HelpComponent } from './help/help.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'recover_password' , component: RecoverPasswordComponent},
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'root', component: AppComponent},
  {path: 'help', component: HelpComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
