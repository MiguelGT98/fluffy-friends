import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from 'src/app/app.module';
import { DogFriendsComponent } from './components/dog-friends/dog-friends.component';
import { NewFriendComponent } from './components/new-friend/new-friend.component';
import { EditFriendComponent } from './components/edit-friend/edit-friend.component';

@NgModule({
  declarations: [DogFriendsComponent, NewFriendComponent, EditFriendComponent],
  imports: [CommonModule, AppModule],
})
export class DogFriendsModule {}
