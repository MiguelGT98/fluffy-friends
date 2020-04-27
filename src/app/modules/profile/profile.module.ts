import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { DetailsComponent } from './details/details.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  declarations: [NavigationComponent, DetailsComponent, ProfilePageComponent],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
