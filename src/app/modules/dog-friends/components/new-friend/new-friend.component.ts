import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FriendsService } from '../../services/friends.service';

@Component({
  selector: 'app-new-friend',
  templateUrl: './new-friend.component.html',
  styleUrls: ['./new-friend.component.scss'],
})
export class NewFriendComponent implements OnInit {
  friendForm;

  constructor(
    private formBuilder: FormBuilder,
    private friendService: FriendsService
  ) {
    this.friendForm = this.formBuilder.group({
      name: '',
      url:
        'https://i.pinimg.com/originals/93/f5/d0/93f5d04e832b57d029dea6edcbd971ff.jpg',
      alt: 'Perro del meme',
      characteristics: [''],
      description: '',
      location: 'CDMX, México',
      matches: 4,
    });
  }

  onSubmit(friend) {
    this.friendService.addFriend(friend);
    this.friendForm.reset();

    console.log('Your friend has been added', friend);
  }

  ngOnInit(): void {}
}
