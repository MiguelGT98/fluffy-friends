import { Injectable } from '@angular/core';
import { FriendsLocalStorageService } from './friends-local-storage.service';
import { Friend } from '../models/friend';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  constructor(public friendsLocalStorageService: FriendsLocalStorageService) {}

  public getFriends(): Array<Friend> {
    const friendsInLocalStorage = this.friendsLocalStorageService.getFriends();
    const newFriends = [];
    for (const key in friendsInLocalStorage) {
      if (friendsInLocalStorage.hasOwnProperty(key)) {
        newFriends.push(
          Friend.fromJSON({
            id: key,
            ...friendsInLocalStorage[key],
          })
        );
      }
    }

    return newFriends;
  }

  public addFriend(friend: any): void {
    this.friendsLocalStorageService.addFriend(friend);
  }

  public getFriend(id: string): Friend {
    return Friend.fromJSON(this.friendsLocalStorageService.getFriend(id));
  }

  public updateFriend(friend: any): void {
    this.friendsLocalStorageService.updateFriend(friend);
  }
}
