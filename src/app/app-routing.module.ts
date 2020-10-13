import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PerfilPropioComponent } from './pages/perfil-propio/perfil-propio.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes =
[
  {path: "", redirectTo: "/landing-page", pathMatch:'full'},
  {path: "landing-page", component: LandingPageComponent},
  {path: "home", component: HomeComponent},
  {path: "perfil", component: PerfilPropioComponent},
  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
