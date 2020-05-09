import { Component, OnInit } from '@angular/core';
import { FriendsLocalStorageService } from '../../services/friends-local-storage.service';

@Component({
  selector: 'app-dog-friends',
  templateUrl: './dog-friends.component.html',
  styleUrls: ['./dog-friends.component.scss'],
})
export class DogFriendsComponent implements OnInit {
  friends = [];
  constructor(private friendsLocalStorageService: FriendsLocalStorageService) {}

  ngOnInit(): void {
    this.getFriends();
  }

  getFriends() {
    const friendsInLocalStorage = this.friendsLocalStorageService.getFriends();
    const newFriends = [];
    for (let key in friendsInLocalStorage) {
      newFriends.push({
        id: key,
        ...friendsInLocalStorage[key],
      });
    }

    this.friends = newFriends;
  }
}
