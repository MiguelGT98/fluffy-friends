import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root',
})
export class FriendsLocalStorageService {
  friends = {};

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {}

  public getFriends(): Array<Object> {
    const friendsInStorage = this.storage.get('friends') || {};

    return friendsInStorage;
  }

  public addFriend(friend: object, id: string): void {
    const friendsInStorage = this.storage.get('friends') || {};
    friendsInStorage[id] = friend;

    this.storage.set('friends', friendsInStorage);
  }
}
