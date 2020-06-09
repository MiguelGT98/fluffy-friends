import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogTinderComponent } from './dog-tinder.component';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DogTinderComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogTinderRoutingModule {}
