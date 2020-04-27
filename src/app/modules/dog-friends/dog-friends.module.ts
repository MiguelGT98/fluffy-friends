import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogMatchesComponent } from './dog-matches/dog-matches.component';
import { AppModule } from 'src/app/app.module';


@NgModule({
  declarations: [DogMatchesComponent],
  imports: [CommonModule, AppModule]
})
export class DogFriendsModule { }
