import { Injectable } from '@angular/core';
import { delay, Observable, of, map } from 'rxjs';
import { GetAuthResponseInterface } from './get-auth-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  redirectUrl!: string;

  constructor() { }

  login(login: string, password: string): Observable<boolean> {
    const observable$: Observable<GetAuthResponseInterface> = of({login: 'admin', password: '123'}).pipe(delay(2000));

    return observable$.pipe(
      map((res: GetAuthResponseInterface) => {
        return login === res.login && password === res.password ? this.isLoggedIn = true : false;
      })
    )
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
