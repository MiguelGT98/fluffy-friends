import { Component, OnInit } from '@angular/core';
import { FriendsLocalStorageService } from '../../services/friends-local-storage.service';
import { ActivatedRoute } from '@angular/router';
import { Friend } from '../../models/friend';
import { FriendsService } from '../../services/friends.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-friend',
  templateUrl: './edit-friend.component.html',
  styleUrls: ['./edit-friend.component.scss'],
})
export class EditFriendComponent implements OnInit {
  id = '';
  friend: Friend;
  friendForm;

  constructor(
    private formBuilder: FormBuilder,
    private friendService: FriendsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.friend = this.friendService.getFriend(this.id);
    });

    console.log(this.friend);

    this.friendForm = this.formBuilder.group({
      id: this.friend.id,
      name: this.friend.name,
      url: this.friend.url,
      alt: '',
      characteristics: this.friend.characteristics,
      description: this.friend.description,
      location: this.friend.location,
      matches: this.friend.matches,
    });
  }

  onSubmit(friend) {
    this.friendService.updateFriend(friend);
    this.friendForm.reset();

    console.log('Your friend has been updated', friend);
  }
}
