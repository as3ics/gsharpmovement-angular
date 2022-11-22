/** @format */

import { Component, ElementRef, HostListener, OnInit } from "@angular/core";
import { ViewportScroller } from "@angular/common";
import * as $ from "jquery";
import { delay } from "rxjs/operators";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.init();
  }

  async init() {
    this.stopAudio();

    await delay(1200);

    $("#play-button").on("click", () => {
      this.startAudio();
    });
    $("#play2-button").on("click", () => {
      this.startAudio();
    });
    $("#mute-button").on("click", () => {
      this.stopAudio();
    });
    $("#mute2-button").on("click", () => {
      this.stopAudio();
    });
  }

  muteButton: ElementRef;

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  async stopAudio() {
    console.log("Stop Audio");
    $("#mute-navbar").css("display", "none");
    $("#play-navbar").css("display", "block");
    await this.stop();
  }

  async startAudio() {
    console.log("Start Audio");
    $("#play-navbar").css("display", "none");
    $("#mute-navbar").css("display", "block");
    await this.play();
  }

  audio = new Audio();
  async play() {
    this.audio.src = "assets/album/01.mp3";
    this.audio.load();
    await this.audio.play();
  }

  async stop() {
    await this.audio.pause();
  }

  played = false;
  @HostListener("window:scroll", ["$event"])
  onScroll(event) {
    if (!this.played) {
      this.played = true;
      this.startAudio();
      console.log("Played");
    }
  }
}
