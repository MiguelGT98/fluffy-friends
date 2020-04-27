import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogMatchesComponent } from './components/dog-matches/dog-matches.component';
import { AppModule } from 'src/app/app.module';
import { DogFriendsComponent } from './components/dog-friends/dog-friends.component';


@NgModule({
  declarations: [DogMatchesComponent, DogFriendsComponent],
  imports: [CommonModule, AppModule]
})
export class DogFriendsModule { }
