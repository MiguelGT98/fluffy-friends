import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './modules/landing-page/home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { StorageServiceModule } from 'ngx-webstorage-service';

@NgModule({
  declarations: [AppComponent, FooterComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, StorageServiceModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
