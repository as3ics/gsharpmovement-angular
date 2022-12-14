/** @format */

import {
  Component,
  EventEmitter,
  Inject,
  OnInit,
  Output,
} from "@angular/core";
import { ViewportScroller } from "@angular/common";
import { delay } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import * as $ from "jquery";

export const PLAY_BUTTON_LS = "LOCAL_STORAGE_PLAY_BUTTON";

export enum PlayButtonValues {
  PLAYING = "playing",
  STOPPED = "stopped",
  UNSET = "",
}

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  @Output() song: EventEmitter<string> = new EventEmitter();


  private isBrowser: boolean;

  constructor(
    private viewportScroller: ViewportScroller,
    private toastr: ToastrService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      NavbarComponent.audio = new Audio();
      this.init();
    }
  }

  async init() {
    $("#mute-navbar").css("display", "none");
    $("#play-navbar").css("display", "block");

    await delay(1200);

    $("#play-button").on("click", () => {
      this.startAudio(
        "assets/album/01.mp3",
        "01. Life is a Journey (feat. Thiago Alves)"
      );
    });
    $("#play2-button").on("click", () => {
      this.startAudio();
    });
    $("#mute-button").on("click", () => {
      this.stopAudio();
      NavbarComponent.stop();
    });
    $("#mute2-button").on("click", () => {
      this.stopAudio();
      NavbarComponent.stop();
    });

    if (this.isBrowser) {
      let prevPlay = localStorage.getItem(PLAY_BUTTON_LS);
      if (prevPlay == PlayButtonValues.UNSET) {
        this.played = false;
      } else if (prevPlay == PlayButtonValues.STOPPED) {
        this.played = true;
      } else if (prevPlay == PlayButtonValues.PLAYING) {
        this.played = false;
      }

      // console.log("PrevPlay: " + prevPlay);
    }
  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  async stopAudio() {
    // console.log("Stop Audio");
    $("#mute-navbar").css("display", "none");
    $("#play-navbar").css("display", "block");
    await NavbarComponent.stop();
    this.toastr.show("Support G# Movement; Sharing is Caring.", "Media Playback Halted");
  }

  async startAudio(
    source: string = "assets/album/01.mp3",
    label: string = "01. Life is a Journey (feat. Thiago Alves)"
  ) {
    // console.log("Start Audio");
    $("#play-navbar").css("display", "none");
    $("#mute-navbar").css("display", "block");
    await NavbarComponent.play(source);
    this.toastr.info(label, "Now Playing");
  }

  async play(source: string = "assets/album/01.mp3") {
    NavbarComponent.audio.src = source;
    NavbarComponent.audio.load();
    try {
      await NavbarComponent.audio.play();
      if (this.isBrowser) localStorage.setItem(PLAY_BUTTON_LS, PlayButtonValues.PLAYING);
    } catch (err) { }
  }

  async stop() {
    try {
      await NavbarComponent.audio.pause();
      if (this.isBrowser) localStorage.setItem(PLAY_BUTTON_LS, PlayButtonValues.STOPPED);
    } catch (err) { }
  }

  played = false;
  // @HostListener("window:scroll", ["$event"])
  // onScroll(event) {
  //   if (!this.played) {
  //     this.played = true;
  //     this.startAudio(
  //       "assets/album/01.mp3",
  //       "01. Life is a Journey (feat. Thiago Alves)"
  //     );
  //     console.log("Played");
  //   }
  // }

  reload() {
    window.location.reload();
  }

  static audio;
  static async play(
    source: string = "assets/album/01.mp3",
    label: string = "Song"
  ) {
    $("#play-navbar").css("display", "none");
    $("#mute-navbar").css("display", "block");
    NavbarComponent.audio.src = source;
    NavbarComponent.audio.load();
    try {
      await this.audio.play();
      // localStorage.setItem(PLAY_BUTTON_LS, PlayButtonValues.PLAYING);
    } catch (err) { }
  }

  static async stop() {
    $("#mute-navbar").css("display", "none");
    $("#play-navbar").css("display", "block");
    try {
      await this.audio.pause();
      // localStorage.setItem(PLAY_BUTTON_LS, PlayButtonValues.STOPPED);
    } catch (err) { }
  }
}
