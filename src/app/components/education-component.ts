import { Component } from "@angular/core";
import { Router, RouteConfig, ROUTER_DIRECTIVES } from "@angular/router-deprecated";

import { CareerComponent } from "./education/career-component.ts";
import { MasterComponent } from "./education/master-component.ts";

@RouteConfig([
  {
    path: "/career",
    name: "Career",
    component: CareerComponent,
    useAsDefault: true
  },
  {
    path: "/master",
    name: "Master",
    component: MasterComponent
  }
])

@Component({
  directives: [ROUTER_DIRECTIVES],
  selector: "education-component",
  template: `
    <div class="ui pointing menu" >
      <a
        [routerLink]="['./Career']"
        [class.active]="isRouteActive(['./Career'])"
        class="item">Career</a>
      <a
        [routerLink]="['./Master']"
        [class.active]="isRouteActive(['./Master'])"
        class="item">Master</a>
    </div>
    <router-outlet></router-outlet>
  `
})

export class EducationComponent {
  constructor (private router: Router) {}

  isRouteActive (link: any[]) {
    return this.router.isRouteActive(this.router.generate(link));
  }
}
