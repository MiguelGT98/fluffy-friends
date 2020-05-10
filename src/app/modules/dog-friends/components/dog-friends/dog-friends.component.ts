import { Component, OnInit } from '@angular/core';
import { Friend } from '../../models/friend';
import { FriendsService } from '../../services/friends.service';

@Component({
  selector: 'app-dog-friends',
  templateUrl: './dog-friends.component.html',
  styleUrls: ['./dog-friends.component.scss'],
})
export class DogFriendsComponent implements OnInit {
  friends: Array<Friend> = [];
  constructor(public friendsService: FriendsService) {}

  ngOnInit(): void {
    this.getFriends();
  }

  getFriends() {
    this.friends = this.friendsService.getFriends();
  }
}
