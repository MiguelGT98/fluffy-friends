import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogTinderComponent } from './dog-tinder.component';

const routes: Routes = [
  {
    path: '',
    component: DogTinderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogTinderRoutingModule {}
