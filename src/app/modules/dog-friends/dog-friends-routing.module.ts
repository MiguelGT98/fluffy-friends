import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogFriendsComponent } from './components/dog-friends/dog-friends.component';
import { DogFriendsWrapperComponent } from './dog-friends-wrapper/dog-friends-wrapper.component';
import { NewFriendComponent } from './components/new-friend/new-friend.component';
import { EditFriendComponent } from './components/edit-friend/edit-friend.component';

const routes: Routes = [
  {
    path: '',
    component: DogFriendsWrapperComponent,
    children: [
      { path: '', component: DogFriendsComponent },
      { path: 'new', component: NewFriendComponent },
      { path: 'edit/:id', component: EditFriendComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogFriendsRoutingModule { }
