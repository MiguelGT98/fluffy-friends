import { Component, OnInit } from '@angular/core';
import { FriendsLocalStorageService } from '../../services/friends-local-storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-friend',
  templateUrl: './edit-friend.component.html',
  styleUrls: ['./edit-friend.component.scss'],
})
export class EditFriendComponent implements OnInit {
  id = '';
  friend: any;

  constructor(
    private friendsLocalStorageService: FriendsLocalStorageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.getFriend(this.id);
    });
  }

  getFriend(id: string) {
    this.friend = this.friendsLocalStorageService.getFriend(id);
  }

  updateFriend(friend: any, id: string) {
    this.friendsLocalStorageService.updateFriend(friend, id);
  }
}
