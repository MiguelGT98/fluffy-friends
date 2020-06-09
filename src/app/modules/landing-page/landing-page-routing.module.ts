import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LandingPageComponent } from './landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'team',
        component: IntegrantesComponent,
      },
      {
        path: 'contact',
        component: ContactoComponent,
      },
      {
        path: 'login',
        canActivate: [AuthGuard],
        component: LoginComponent,
      },
      {
        path: 'register',
        canActivate: [AuthGuard],
        component: RegistroComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
