import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PerfilAjenoComponent } from './pages/perfil-ajeno/perfil-ajeno.component';
import { PerfilPropioComponent } from './pages/perfil-propio/perfil-propio.component';
import { PublicarClaseComponent } from './pages/publicar-clase/publicar-clase.component';

const routes: Routes =
[
  {path: "", redirectTo: "/landing-page", pathMatch:'full'},
  {path: "landing-page", component: LandingPageComponent},
  {path: "home", component: HomeComponent},
  {path: "perfil", component: PerfilPropioComponent},
  {path: "user", component: PerfilAjenoComponent},
  {path: "publicar", component: PublicarClaseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
