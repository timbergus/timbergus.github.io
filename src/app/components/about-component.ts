import { Component } from "@angular/core";
import { RouteParams } from "@angular/router-deprecated";

@Component({
  selector: "about-component",
  template: `
    <div class="ui message">AboutComponent with param {{ param }}</div>
  `
})

export class AboutComponent {
  param: number;

  constructor (private _routeParams: RouteParams) {
    this.param = Number(_routeParams.get("param"));
  }
}
