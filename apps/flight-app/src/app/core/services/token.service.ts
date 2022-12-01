import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE } from '@ng-web-apis/common';
import { BehaviorSubject } from 'rxjs';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRhMDA1NzRmLTQ2Y2EtNGI2Ni04MmQ3LTRjOGE3ZmYwYjdiMCIsImlhdCI6MTY2NzgyMDk5NiwiZXhwIjoxNjY4MDc2NTk2fQ.aZRInY0lsfjnoM9Gt3A--4-JmlSfuDka75oVqUlzOF4';

@Injectable({ providedIn: 'root' })
export class TokenService {
  isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject(
    this.isAuthenticated()
  );

  constructor(@Inject(LOCAL_STORAGE) private localStorage: Storage) {}

  getToken(): string | null {
    return this.localStorage.getItem('token');
  }

  setToken(): void {
    this.localStorage.setItem('token', token);
    this.isAuthenticated$.next(true);
  }

  removeToken(): void {
    this.localStorage.removeItem('token');
    this.isAuthenticated$.next(false);
  }

  isAuthenticated(): boolean {
    return this.isTokenValid(this.getToken());
  }

  private isTokenValid(token: string | null): boolean {
    return !!token;
  }
}
