import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PerfilPropioComponent } from './pages/perfil-propio/perfil-propio.component';

const routes: Routes =
[
  {path: "", redirectTo: "/landing-page", pathMatch:'full'},
  {path: "landing-page", component: LandingPageComponent},
  {path: "home", component: HomeComponent},
  {path: "perfil", component: PerfilPropioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
