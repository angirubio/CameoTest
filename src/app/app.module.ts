import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatNativeDateModule} from '@angular/material/core';
import {MatStepperModule} from '@angular/material/stepper';


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
import { ChatComponent } from './pages/chat/chat.component';
import { OrganizarClasesComponent } from './pages/organizar-clases/organizar-clases.component';
import { PeticionesClaseComponent } from './pages/peticiones-clase/peticiones-clase.component';
import { MisCameosComponent } from './pages/mis-cameos/mis-cameos.component';
import { PublicarClaseComponent } from './pages/publicar-clase/publicar-clase.component';
import { PublicacionComponent } from './pages/publicacion/publicacion.component';
import { HeaderActiveComponent } from './components/header-active/header-active.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
    ChatComponent,
    OrganizarClasesComponent,
    PeticionesClaseComponent,
    MisCameosComponent,
    PublicarClaseComponent,
    PublicacionComponent,
    HeaderActiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatStepperModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
