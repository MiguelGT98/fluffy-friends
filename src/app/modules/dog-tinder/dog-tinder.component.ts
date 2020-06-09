import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../dog-friends/services/friends.service';
import { Observable } from 'rxjs';
import { Friend } from '../dog-friends/models/friend';

import '@deckdeckgo/core';
import '@deckdeckgo/slide-title';
import { defineCustomElements as deckGoCore } from '@deckdeckgo/core/dist/loader';
import { defineCustomElements as deckGoSlide } from '@deckdeckgo/slide-title/dist/loader';
deckGoCore(window);
deckGoSlide(window);

@Component({
  selector: 'app-dog-tinder',
  templateUrl: './dog-tinder.component.html',
  styleUrls: ['./dog-tinder.component.scss'],
})
export class DogTinderComponent implements OnInit {
  friends$: Observable<Array<Friend>>;
  showNavigationIndicators: boolean = true;

  constructor(private friendsService: FriendsService) {}

  ngOnInit(): void {
    this.friendsService.getFriends().subscribe(
      ({ friends }) => {
        this.friends$ = friends;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
