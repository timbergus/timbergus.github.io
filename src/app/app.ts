/// <reference path="./app.d.ts"/>
/// <reference path="../../typings/browser.d.ts"/>

import "es6-shim";
import "zone.js/dist/zone";
import "reflect-metadata";

import { provide } from "@angular/core";
import { bootstrap } from "@angular/platform-browser-dynamic";
import { ROUTER_PROVIDERS } from "@angular/router-deprecated";
import { AUTH_PROVIDERS } from "./services/auth-service.ts";
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from "@angular/common";

import { Home } from "./main.ts";

bootstrap(Home, [
  ROUTER_PROVIDERS,
  AUTH_PROVIDERS,
  provide(LocationStrategy, {
    useClass: HashLocationStrategy
  }),
  provide(APP_BASE_HREF, {
    useValue: "/"
  })
]);
