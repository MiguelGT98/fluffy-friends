import { DogTinderComponent } from '../app/modules/dog-tinder/components/dog-tinder/dog-tinder.component';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { AppModule } from '../app/app.module';
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import { DogTinderModule } from 'src/app/modules/dog-tinder/dog-tinder.module';

export default { title: 'Dog tinder' };

storiesOf('Header', module)
  .addDecorator(moduleMetadata({ imports: [DogTinderModule] }))
  .add('Dog tinder', () => ({
    component: DogTinderComponent,
  }));
