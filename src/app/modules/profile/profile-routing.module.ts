import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileWrapperComponent } from './profile-wrapper/profile-wrapper.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ProfileWrapperComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [{ path: '', component: ProfilePageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
