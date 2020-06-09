import { LOCALE_ID, Injectable, Inject } from '@angular/core';

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { environment } from '../../../../environments/environment';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  endpoint: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  getData(user: string): Observable<any> {
    return this.http
      .get(`${this.endpoint}users`, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user}`,
          'Accept-Language': this.locale,
        }),
      })
      .pipe(retry(3), catchError(this.handleError));
  }

  updateData(user: object, userToken: string): Observable<any> {
    console.log(user, userToken);
    return this.http
      .patch(`${this.endpoint}users`, user, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
          'Accept-Language': this.locale,
        }),
      })
      .pipe(retry(3), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    // return an observable with a user-facing error message
    return throwError(error);
  }
}
