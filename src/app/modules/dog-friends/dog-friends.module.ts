import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogFriendsComponent } from './components/dog-friends/dog-friends.component';
import { NewFriendComponent } from './components/new-friend/new-friend.component';
import { EditFriendComponent } from './components/edit-friend/edit-friend.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { DogFriendsRoutingModule } from './dog-friends-routing.module';
import { DogFriendsWrapperComponent } from './dog-friends-wrapper/dog-friends-wrapper.component';

@NgModule({
  declarations: [
    DogFriendsComponent,
    NewFriendComponent,
    EditFriendComponent,
    DogFriendsWrapperComponent,
  ],
  imports: [CommonModule, CommonComponentsModule, DogFriendsRoutingModule],
})
export class DogFriendsModule {}
