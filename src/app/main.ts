import { Component } from "@angular/core";
import { Router, RouteConfig, ROUTER_DIRECTIVES } from "@angular/router-deprecated";

// Here we import the components we are going to route.
import { LoginComponent } from "./components/login-component.ts";
import { HomeComponent } from "./components/home-component.ts";
import { EducationComponent } from "./components/education-component.ts";
import { AboutComponent } from "./components/about-component.ts";
import { ContactComponent } from "./components/contact-component.ts";

// Here we have the routing definition.
@RouteConfig([
  { path: "/",              name: "root",      redirectTo: ["/Login"] },
  { path: "/contactus",     name: "ContactUs", redirectTo: ["/Contact"] },
  { path: "/login",         name: "Login",     component: LoginComponent },
  { path: "/home",          name: "Home",      component: HomeComponent },
  { path: "/education/...", name: "Education", component: EducationComponent },
  { path: "/about/:param",  name: "About",     component: AboutComponent },
  { path: "/contact",       name: "Contact",   component: ContactComponent }
])

// And the home component that contains the application.
@Component({
  selector: "main",
  directives: [ROUTER_DIRECTIVES],
  template: `
    <h1>Gustavo Muñoz Site</h1>

    <div class="ui pointing menu" >
      <a
        [routerLink]="['/Login']"
        [class.active]="isRouteActive(['/Login'])"
        class="item">Login</a>
      <a
        [routerLink]="['/Home']"
        [class.active]="isRouteActive(['/Home'])"
        class="item">Home</a>
      <a
        [routerLink]="['/Education']"
        [class.active]="isRouteActive(['/Education'])"
        class="item">Education</a>
      <a
        [routerLink]="['/About', { param: param }]"
        [class.active]="isRouteActive(['/About', { param: param }])"
        class="item">About</a>
      <a
        [routerLink]="['/Contact']"
        [class.active]="isRouteActive(['/Contact'])"
        class="item">Contact</a>
    </div>

    <router-outlet></router-outlet>
  `
})

export class Home {
  param: number;

  constructor (private router: Router) {
    this.param = 666;
  }

  isRouteActive (link: any[]) {
    return this.router.isRouteActive(this.router.generate(link));
  }
}
