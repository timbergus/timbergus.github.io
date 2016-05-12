import { Component, ReflectiveInjector } from "@angular/core";
import { CanActivate } from "@angular/router-deprecated";
import { AuthService } from "../services/auth-service.ts";

@CanActivate(
  (nextInstr: any, currInstr: any) => {
    let injector: any = ReflectiveInjector.resolveAndCreate([AuthService]);
    let authService: AuthService = injector.get(AuthService);
    return authService.isLogged();
  }
)

@Component({
  selector: "home-component",
  template: `
    <div class="ui message">HomeComponent</div>
  `
})

export class HomeComponent {}
