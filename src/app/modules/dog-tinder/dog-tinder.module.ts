import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogWikiComponent } from './components/dog-wiki/dog-wiki.component';
import { DogTinderRoutingModule } from './dog-tinder-routing.module';
import { DogTinderComponent } from './dog-tinder.component';
import { CommonComponentsModule } from '../common-components/common-components.module';

@NgModule({
  declarations: [DogWikiComponent, DogTinderComponent],
  imports: [CommonModule, DogTinderRoutingModule, CommonComponentsModule],
  exports: [DogWikiComponent, DogTinderComponent],
})
export class DogTinderModule {}
