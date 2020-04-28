import { moduleMetadata, storiesOf } from '@storybook/angular';
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import { DogFriendsModule } from 'src/app/modules/dog-friends/dog-friends.module';
import { DogFriendsComponent } from 'src/app/modules/dog-friends/components/dog-friends/dog-friends.component';
import { NewFriendComponent } from 'src/app/modules/dog-friends/components/new-friend/new-friend.component';
import { EditFriendComponent } from 'src/app/modules/dog-friends/components/edit-friend/edit-friend.component';

export default { title: 'Friends' };

storiesOf('Friends', module)
  .addDecorator(moduleMetadata({ imports: [DogFriendsModule] }))
  .add('Friends table', () => ({
    component: DogFriendsComponent,
  }))
  .add('New friend', () => ({
    component: NewFriendComponent,
  }))
  .add('Edit friend', () => ({
    component: EditFriendComponent,
  }));
