import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta de inicio
  { path: 'register', component: RegisterComponent }, // Ruta de registro
  { path: 'login', component: LoginComponent }, // Ruta de login
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },// Ruta protegida

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
