import { DogCardComponent } from '../app/common/dog-card/dog-card.component';

import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import { RibbonComponent } from 'src/app/common/ribbon/ribbon.component';

export default { title: 'Common components' };

export const dogCard = () => ({
  component: DogCardComponent,
});

export const ribbon = () => ({ component: RibbonComponent });
