import { LOCALE_ID, Injectable, Inject } from '@angular/core';
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
  endpoint: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private authLocal: AuthLocalStorageService,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  public getMyFriends(): Observable<any> {
    const userToken = this.authLocal.getCurrentUser();

    return this.http
      .get(`${this.endpoint}friends/self`, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
          'Accept-Language': this.locale,
        }),
      })
      .pipe(retry(3), catchError(this.handleError));
  }

  public getFriends(): Observable<any> {
    const userToken = this.authLocal.getCurrentUser();

    return this.http
      .get(`${this.endpoint}friends`, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
          'Accept-Language': this.locale,
        }),
      })
      .pipe(retry(3), catchError(this.handleError));
  }

  updateFriend(friend: any): Observable<any> {
    const userToken = this.authLocal.getCurrentUser();

    const formData = new FormData();
    formData.append('image', friend.image);
    for (let key in friend) {
      if (key === 'characteristics') {
        formData.append(
          'characteristics',
          JSON.stringify(friend.characteristics)
        );
      } else if (!(key === 'image')) formData.append(key, friend[key]);
    }

    return this.http
      .patch(`${this.endpoint}friends/${friend._id}`, formData, {
        headers: new HttpHeaders({
          Authorization: `Bearer ${userToken}`,
          'Accept-Language': this.locale,
        }),
      })
      .pipe(retry(3), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error);
  }

  public addFriend(friend: any): Observable<any> {
    const userToken = this.authLocal.getCurrentUser();

    const formData = new FormData();
    formData.append('image', friend.image);
    for (let key in friend) {
      if (key === 'characteristics') {
        formData.append(
          'characteristics',
          JSON.stringify(friend.characteristics)
        );
      } else if (!(key === 'image')) formData.append(key, friend[key]);
    }

    return this.http
      .post(`${this.endpoint}friends`, formData, {
        headers: new HttpHeaders({
          Authorization: `Bearer ${userToken}`,
          'Accept-Language': this.locale,
        }),
      })
      .pipe(retry(3), catchError(this.handleError));
  }

  public getFriend(id: string): Observable<any> {
    const userToken = this.authLocal.getCurrentUser();
    return this.http
      .get(`${this.endpoint}friends/${id}`, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
          'Accept-Language': this.locale,
        }),
      })
      .pipe(retry(3), catchError(this.handleError));
  }
}
