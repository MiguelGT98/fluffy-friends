import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RibbonComponent } from 'src/app/common/ribbon/ribbon.component';
import { NavbarComponent } from 'src/app/common/navbar/navbar.component';
import { DogCardComponent } from '../dog-tinder/components/dog-card/dog-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RibbonComponent, NavbarComponent, DogCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [RibbonComponent, NavbarComponent, DogCardComponent],
})
export class CommonComponentsModule {}
