import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogWikiComponent } from './components/dog-wiki/dog-wiki.component';
import { DogTinderRoutingModule } from './dog-tinder-routing.module';
import { DogTinderComponent } from './dog-tinder.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DogWikiComponent, DogTinderComponent],
  imports: [
    CommonModule,
    DogTinderRoutingModule,
    CommonComponentsModule,
    ChartsModule,
    NgbModule,
  ],
  exports: [DogWikiComponent, DogTinderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DogTinderModule {}
