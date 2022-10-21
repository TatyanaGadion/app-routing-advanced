import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message!: string;
  userLogin: string = 'admin';
  userPassword: string = '123';

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void { }

  login(): void {
    this.setMessage('Ttying to log in ...')
    this.authService.login(this.userLogin, this.userPassword);
    this.setMessage();
  }

  logout(): void {}

  private setMessage(msg: string = ''): void {
    if (msg) {
      this.message = msg;
      return
    }

    this.message = `Logged ${this.authService.isLoggedIn ? 'in' : 'out'}`
  }

}
