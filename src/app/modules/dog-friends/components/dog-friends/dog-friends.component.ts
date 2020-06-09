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
  currentPage: number = 0;
  maxPage: number;

  constructor(public friendsService: FriendsService) {}

  ngOnInit(): void {
    this.getFriends();
  }

  getFriends() {
    this.friendsService.getMyFriends(this.currentPage).subscribe(
      ({ friends, maxPage }) => {
        this.friends$ = friends;
        this.maxPage = maxPage;
      },
      ({ error }) => {
        $('#error .modal-body').text(error.message);
        $('#error').modal('toggle');
      }
    );
  }

  public previousPage() {
    if (this.currentPage === 0) return;
    this.currentPage -= 1;

    this.friendsService.getMyFriends(this.currentPage).subscribe(
      ({ friends, maxPage }) => {
        this.friends$ = friends;
        this.maxPage = maxPage;
      },
      ({ error }) => {
        $('#error .modal-body').text(error.message);
        $('#error').modal('toggle');
      }
    );
  }

  public nextPage() {
    if (this.currentPage === this.maxPage) return;
    this.currentPage += 1;

    this.friendsService.getMyFriends(this.currentPage).subscribe(
      ({ friends, maxPage }) => {
        this.friends$ = friends;
        this.maxPage = maxPage;
      },
      ({ error }) => {
        $('#error .modal-body').text(error.message);
        $('#error').modal('toggle');
      }
    );
  }
}
