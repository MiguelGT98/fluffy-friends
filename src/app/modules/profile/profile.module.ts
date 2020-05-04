import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { DetailsComponent } from './details/details.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileWrapperComponent } from './profile-wrapper/profile-wrapper.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { CommonComponentsModule } from '../common-components/common-components.module';

@NgModule({
  declarations: [
    NavigationComponent,
    DetailsComponent,
    ProfilePageComponent,
    ProfileWrapperComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule, CommonComponentsModule],
})
export class ProfileModule {}
