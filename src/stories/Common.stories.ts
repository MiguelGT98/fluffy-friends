import { DogCardComponent } from '../app/modules/dog-tinder/components/dog-card/dog-card.component';

import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import { RibbonComponent } from 'src/app/common/ribbon/ribbon.component';

export default { title: 'Common components' };

export const dogCard = () => ({
  component: DogCardComponent,
});

export const ribbon = () => ({ component: RibbonComponent });
