import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [AboutComponent, IntegrantesComponent, ContactoComponent, LoginComponent, RegistroComponent],
  imports: [
    CommonModule
  ]
})
export class LandingPageModule { }
