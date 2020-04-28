import { moduleMetadata, storiesOf } from '@storybook/angular';
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import { LandingPageModule } from 'src/app/modules/landing-page/landing-page.module';
import { RegistroComponent } from 'src/app/modules/landing-page/registro/registro.component';
import { LoginComponent } from 'src/app/modules/landing-page/login/login.component';
import { IntegrantesComponent } from 'src/app/modules/landing-page/integrantes/integrantes.component';
import { HomeComponent } from 'src/app/modules/landing-page/home/home.component';
import { ContactoComponent } from 'src/app/modules/landing-page/contacto/contacto.component';
import { AboutComponent } from 'src/app/modules/landing-page/about/about.component';

export default { title: 'Landing Page' };

storiesOf('Landing Page', module)
  .addDecorator(moduleMetadata({ imports: [LandingPageModule] }))
  .add('Register', () => ({
    component: RegistroComponent,
  }))
  .add('Login', () => ({
    component: LoginComponent,
  }))
  .add('Integrantes', () => ({
    component: IntegrantesComponent,
  }))
  .add('Home', () => ({
    component: HomeComponent,
  }))
  .add('Contacto', () => ({
    component: ContactoComponent,
  }))
  .add('About', () => ({
    component: AboutComponent,
  }));
