import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { NavbarNoAuthComponent } from './navbar-no-auth/navbar-no-auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule } from 'ngx-webstorage-service';

@NgModule({
  declarations: [
    AboutComponent,
    IntegrantesComponent,
    ContactoComponent,
    LoginComponent,
    RegistroComponent,
    LandingPageComponent,
    NavbarNoAuthComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StorageServiceModule,
  ],
})
export class LandingPageModule {}
