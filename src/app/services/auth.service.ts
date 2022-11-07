import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  onLoginChange = new EventEmitter()

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('username');
  }

  doLogin(username: string, password: string): void {
    localStorage.setItem('username', username);
    this.onLoginChange.emit(this.isLoggedIn);
  }
  doLogOut(): void {
    localStorage.clear();
    this.onLoginChange.emit(this.isLoggedIn);
  }
}
