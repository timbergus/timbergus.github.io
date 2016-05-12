import { Component } from "@angular/core";
import { Router } from "@angular/router-deprecated";
import { AuthService } from "../services/auth-service.ts";

@Component({
  selector: "login-component",
  template: `
    <form class="ui form error" *ngIf="!authService.getUser()">
      <div class="field">
        <label for="username">User:</label>
        <input class="form-control" name="username" #username>
      </div>

      <div class="field">
        <label for="password">Password:</label>
        <input class="form-control" type="password" name="password" #password>
      </div>

      <a class="ui primary button" (click)="login(username.value, password.value)">
        Submit
      </a>
    </form>

    <div class="ui error message" role="alert" *ngIf="message">
      {{ message }}
    </div>

    <div class="ui info message" *ngIf="authService.getUser()">
      <p>Logged in as <b>{{ authService.getUser() }}</b></p>
      <a class="ui primary button" (click)="logout()">Log out</a>
    </div>
  `
})

export class LoginComponent {
  message: string;

  constructor (private authService: AuthService, private router: Router) {
    this.message = "";
  }

  login (username: string, password: string): boolean {
    if (!this.authService.login(username, password)) {
      this.message = "Incorrect credentials.";
      setTimeout(() => this.message = "", 2500);
    } else {
      setTimeout(() => this.router.navigate(["/Home"]), 1500);
    }
    return false;
  }

  logout (): boolean {
    this.authService.logout();
    return false;
  }
}
