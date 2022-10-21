import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor() { }

  login(login: string, password: string): boolean {
    return login === 'admin' && password === '123' ? this.isLoggedIn = true : false;
  }
}
