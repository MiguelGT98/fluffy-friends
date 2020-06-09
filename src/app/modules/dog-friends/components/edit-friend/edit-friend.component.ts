import { Component, OnInit } from '@angular/core';
import { FriendsLocalStorageService } from '../../services/friends-local-storage.service';
import { ActivatedRoute } from '@angular/router';
import { Friend } from '../../models/friend';
import { FriendsService } from '../../services/friends.service';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-edit-friend',
  templateUrl: './edit-friend.component.html',
  styleUrls: ['./edit-friend.component.scss'],
})
export class EditFriendComponent implements OnInit {
  id = '';
  friend$: Observable<Friend>;
  friendForm;

  constructor(
    private formBuilder: FormBuilder,
    private friendService: FriendsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.getFriendData(this.id);
    });
  }

  getFriendData(id: string) {
    this.friendService.getFriend(id).subscribe(
      (success) => {
        this.friend$ = success;

        this.friendForm = this.formBuilder.group({
          ...this.friend$,
        });

        console.log(this.friend$);
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

  onSubmit(friend) {
    this.friendService.updateFriend(friend).subscribe(
      (success) => {
        console.log(success);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
