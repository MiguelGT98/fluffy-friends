import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './modules/landing-page/home/home.component';
import { DogCardComponent } from './common/dog-card/dog-card.component';
import { RibbonComponent } from './common/ribbon/ribbon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    DogCardComponent,
    RibbonComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [DogCardComponent],
})
export class AppModule {}
