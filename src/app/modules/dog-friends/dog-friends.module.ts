import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogFriendsComponent } from './components/dog-friends/dog-friends.component';
import { NewFriendComponent } from './components/new-friend/new-friend.component';
import { EditFriendComponent } from './components/edit-friend/edit-friend.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { DogFriendsRoutingModule } from './dog-friends-routing.module';
import { DogFriendsWrapperComponent } from './dog-friends-wrapper/dog-friends-wrapper.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { FriendsLocalStorageService } from './services/friends-local-storage.service';

@NgModule({
  declarations: [
    DogFriendsComponent,
    NewFriendComponent,
    EditFriendComponent,
    DogFriendsWrapperComponent,
  ],
  imports: [
    CommonModule,
    CommonComponentsModule,
    DogFriendsRoutingModule,
    StorageServiceModule,
  ],
  providers: [FriendsLocalStorageService],
})
export class DogFriendsModule {}
