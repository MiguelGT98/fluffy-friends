import { moduleMetadata, storiesOf } from '@storybook/angular';
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import { ProfileModule } from 'src/app/modules/profile/profile.module';
import { ProfilePageComponent } from 'src/app/modules/profile/profile-page/profile-page.component';

export default { title: 'Profile' };

storiesOf('Profile', module)
  .addDecorator(moduleMetadata({ imports: [ProfileModule] }))
  .add('Profile page', () => ({
    component: ProfilePageComponent,
  }));
