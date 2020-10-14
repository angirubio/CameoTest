import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { MisCameosComponent } from './pages/mis-cameos/mis-cameos.component';
import { OrganizarClasesComponent } from './pages/organizar-clases/organizar-clases.component';
import { PerfilAjenoComponent } from './pages/perfil-ajeno/perfil-ajeno.component';
import { PerfilPropioComponent } from './pages/perfil-propio/perfil-propio.component';
import { PeticionesClaseComponent } from './pages/peticiones-clase/peticiones-clase.component';
import { PublicarClaseComponent } from './pages/publicar-clase/publicar-clase.component';
import { RegistroComponent } from './pages/registro/registro.component';


const routes: Routes =
[
  {path: "", redirectTo: "/landing-page", pathMatch:'full'},
  {path: "landing-page", component: LandingPageComponent},
  {path: "home", component: HomeComponent},
  {path: "perfil", component: PerfilPropioComponent},
  {path: "user", component: PerfilAjenoComponent},
  {path: "publicar", component: PublicarClaseComponent},

  {path: "chat", component: ChatComponent},
  {path: "organizar-clases", component: OrganizarClasesComponent},
  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroComponent},
  {path: "peticiones", component: PeticionesClaseComponent},
  {path: "mis-cameos", component: MisCameosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
