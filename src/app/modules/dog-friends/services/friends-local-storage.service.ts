import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root',
})
export class FriendsLocalStorageService {
  friends = {};

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {}

  public getFriends(): Array<object> {
    const friendsInStorage = this.storage.get('friends') || {};

    return friendsInStorage;
  }

  public getFriend(id: string): object {
    const friend = this.storage.get('friends')[id] || {};

    return friend;
  }

  public addFriend(friend: any): void {
    console.log(friend);

    const friendsInStorage = this.storage.get('friends') || {};
    const id = this.generateID();
    friendsInStorage[id] = {
      ...friend,
      id,
      characteristics: [friend.characteristics],
    };

    this.storage.set('friends', friendsInStorage);
  }

  public updateFriend(friend: any): void {
    console.log(friend);
    const friendsInStorage = this.storage.get('friends') || {};
    friendsInStorage[friend.id] = {
      ...friend,
      characteristics: [friend.characteristics],
    };

    this.storage.set('friends', friendsInStorage);
  }

  public generateID() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
