import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FriendsService } from '../../services/friends.service';

@Component({
  selector: 'app-new-friend',
  templateUrl: './new-friend.component.html',
  styleUrls: ['./new-friend.component.scss'],
})
export class NewFriendComponent implements OnInit {
  friendForm;
  image;
  @ViewChild('fileInput') fileInput;

  constructor(
    private formBuilder: FormBuilder,
    private friendService: FriendsService
  ) {
    this.friendForm = this.formBuilder.group({
      name: '',
      characteristics: [],
      description: '',
      location: 'CDMX, México',
      breed: '',
      image: null,
    });
  }

  onSubmit(friend) {
    this.friendService.addFriend(friend).subscribe(
      (success) => {
        console.log(success);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      this.friendForm.patchValue({
        image: file,
      });
    }
  }

  ngOnInit(): void {}
}
