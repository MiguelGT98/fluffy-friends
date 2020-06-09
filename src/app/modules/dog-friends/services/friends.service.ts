import { Injectable } from '@angular/core';
import { Friend } from '../models/friend';

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { environment } from '../../../../environments/environment';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthLocalStorageService } from 'src/app/auth/auth-local-storage.service';


@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  //constructor(public friendsLocalStorageService: FriendsLocalStorageService) {}

  endpoint: string = environment.apiUrl;
  constructor(private http: HttpClient, private authLocal: AuthLocalStorageService) {}


  public getFriends(friends:string): Observable<any> {
   /* const friendsInLocalStorage = this.friendsLocalStorageService.getFriends();
    const newFriends = [];
    for (const key in friendsInLocalStorage) {
      if (friendsInLocalStorage.hasOwnProperty(key)) {
        newFriends.push(
          Friend.fromJSON({
            id: key,
            ...friendsInLocalStorage[key],
          })
        );
      }*/
      return this.http
      .get(`${this.endpoint}friends`, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${friends}`,
        }),
      })
      .pipe(retry(3), catchError(this.handleError));
    }

    updateFriend(friends: object, userToken: string): Observable<any> {
      console.log(friends, userToken);
      return this.http.patch(`${this.endpoint}friends`, friends, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
        }),
      });
    }

    private handleError(error: HttpErrorResponse) {
      console.error(error);
      return throwError('Something bad happened; please try again later.');
    }
    //return newFriends;
    public addFriend(friend: any): Observable<any> {
      const userToken = this.authLocal.getCurrentUser();
      //console.log(friends, userToken);
      return this.http.post(`${this.endpoint}friends`, friend, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
        }),
      });
      //this.friendsLocalStorageService.addFriend(friend);
    }
    /*public updateFriend(friend: any): void {
      //this.friendsLocalStorageService.updateFriend(friend);
    }*/
    public getFriend(id: string): Observable<any> {
      const userToken = this.authLocal.getCurrentUser();
      //console.log(friends, userToken);
      return this.http.get(`${this.endpoint}/friend/${id}`, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
        }),
      });

      //return Friend.fromJSON(this.friendsLocalStorageService.getFriend(id));
    }
  }


/*
  public getFriend(id: string): Friend {
    return Friend.fromJSON(this.friendsLocalStorageService.getFriend(id));
  }


}*/
