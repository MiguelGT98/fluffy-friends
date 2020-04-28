import { moduleMetadata, storiesOf } from '@storybook/angular';
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import { DogFriendsModule } from 'src/app/modules/dog-friends/dog-friends.module';
import { DogFriendsComponent } from 'src/app/modules/dog-friends/components/dog-friends/dog-friends.component';

export default { title: 'Friends' };

storiesOf('Friends', module)
  .addDecorator(moduleMetadata({ imports: [DogFriendsModule] }))
  .add('Friends table', () => ({
    component: DogFriendsComponent,
  }));
