import { Component, OnInit } from '@angular/core';
import { Friend } from '../../models/friend';
import { FriendsService } from '../../services/friends.service';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-dog-friends',
  templateUrl: './dog-friends.component.html',
  styleUrls: ['./dog-friends.component.scss'],
})
export class DogFriendsComponent implements OnInit {
  friends$: Observable<Array<Friend>>;
  constructor(public friendsService: FriendsService) {}

  ngOnInit(): void {
    this.getFriends();
  }

  getFriends() {
    this.friendsService.getMyFriends().subscribe(
      ({ friends }) => {
        this.friends$ = friends;
      },
      ({ error }) => {
        $('#error .modal-body').text(error.message);
        $('#error').modal('toggle');
      }
    );
  }
}
