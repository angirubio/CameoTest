import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilPropioComponent } from './pages/perfil-propio/perfil-propio.component';
import { PerfilAjenoComponent } from './pages/perfil-ajeno/perfil-ajeno.component';
import { PrincipalChatComponent } from './pages/principal-chat/principal-chat.component';
import { ChatComponent } from './pages/chat/chat.component';
import { OrganizarClasesComponent } from './pages/organizar-clases/organizar-clases.component';
import { PeticionesClaseComponent } from './pages/peticiones-clase/peticiones-clase.component';
import { MisCameosComponent } from './pages/mis-cameos/mis-cameos.component';
import { PublicarClaseComponent } from './pages/publicar-clase/publicar-clase.component';
import { PublicacionComponent } from './pages/publicacion/publicacion.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LandingPageComponent,
    RegistroComponent,
    LoginComponent,
    HomeComponent,
    PerfilPropioComponent,
    PerfilAjenoComponent,
    PrincipalChatComponent,
    ChatComponent,
    OrganizarClasesComponent,
    PeticionesClaseComponent,
    MisCameosComponent,
    PublicarClaseComponent,
    PublicacionComponent,
    CarrouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
