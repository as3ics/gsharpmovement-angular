/** @format */

import { Component, ElementRef, HostListener, OnInit } from "@angular/core";
import { ViewportScroller } from "@angular/common";
import * as $ from "jquery";
import { delay } from "rxjs/operators";
import { Router } from "@angular/router";

export const PLAY_BUTTON_LS = "LOCAL_STORAGE_PLAY_BUTTON";

export enum PlayButtonValues {
  PLAYING = "playing",
  STOPPED = "stopped",
  UNSET = ""
}

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller, private router: Router) { }

  ngOnInit() {
    this.init();
  }

  async init() {

    $("#mute-navbar").css("display", "none");
    $("#play-navbar").css("display", "block");

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

    let prevPlay = localStorage.getItem(PLAY_BUTTON_LS);
    if (prevPlay == PlayButtonValues.UNSET) {
      this.played = false;
    } else if (prevPlay == PlayButtonValues.STOPPED) {
      this.played = true;
    } else if (prevPlay == PlayButtonValues.PLAYING) {
      this.played = false;
    }

    console.log("PrevPlay: " + prevPlay);
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
    try {
      await this.audio.play();
      localStorage.setItem(PLAY_BUTTON_LS, PlayButtonValues.PLAYING);
    } catch (err) {

    }
  }

  async stop() {
    try {
      await this.audio.pause();
      localStorage.setItem(PLAY_BUTTON_LS, PlayButtonValues.STOPPED);
    } catch (err) {

    }
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

  reload() {
    window.location.reload();
  }
}
