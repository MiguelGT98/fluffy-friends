import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './modules/landing-page/home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { StorageServiceModule } from 'ngx-webstorage-service';

import { ChartsModule } from 'ng2-charts';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {registerLocaleData} from '@angular/common';
import localMx from '@angular/common/locales/es-MX';
import localUS from '@angular/common/locales/en';

registerLocaleData(localMx, 'es-MX');
registerLocaleData(localUS, 'en');



@NgModule({
  declarations: [AppComponent, FooterComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, StorageServiceModule, ChartsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule { }
