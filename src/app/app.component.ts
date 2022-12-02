/** @format */

import { Component, Inject, OnInit, PLATFORM_ID } from "@angular/core";
import {
  Router,
  NavigationStart,
  NavigationCancel,
  NavigationEnd,
} from "@angular/router";
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from "@angular/common";
import { filter } from "rxjs/operators";
import { DownloadService } from './services/downloads.service';
import { isPlatformBrowser } from '@angular/common';

import * as $ from "jquery";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [
    Location,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
  ],
})
export class AppComponent implements OnInit {
  location: any;
  routerSubscription: any;
  private isBrowser: boolean;

  constructor(private router: Router, private downloadService: DownloadService, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.recallJsFuntions();
      this.downloadService.init();
    }
  }

  async recallJsFuntions() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        $(".preloader").fadeIn("slow");
      }
    });
    this.routerSubscription = this.router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationEnd || event instanceof NavigationCancel
        )
      )
      .subscribe(async (event) => {
        await $.getScript("../assets/js/main.js", (success) => {
          console.log(success);
        });

        $(".preloader").fadeOut("slow");
        this.location = this.router.url;
        if (!(event instanceof NavigationEnd)) {
          return;
        }
        window.scrollTo(0, 0);
      });
  }
}
