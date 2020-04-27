import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogWikiComponent } from './components/dog-wiki/dog-wiki.component';
import { DogTinderComponent } from './components/dog-tinder/dog-tinder.component';
import { AppModule } from 'src/app/app.module';

@NgModule({
  declarations: [DogWikiComponent, DogTinderComponent],
  imports: [CommonModule, AppModule],
  exports: [DogWikiComponent, DogTinderComponent],
})
export class DogTinderModule {}
