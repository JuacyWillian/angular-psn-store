import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('username');
  }

  doLogin(username: string, password: string): void {
    localStorage.setItem('username', username);
  }
  doLogOut(): void {
    localStorage.clear();
  }

}
