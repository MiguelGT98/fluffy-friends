import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from 'src/app/app.module';
import { DogFriendsComponent } from './components/dog-friends/dog-friends.component';

@NgModule({
  declarations: [DogFriendsComponent],
  imports: [CommonModule, AppModule],
})
export class DogFriendsModule {}
