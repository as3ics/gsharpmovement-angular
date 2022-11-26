/** @format */

import { Component, OnInit } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { ToastrService } from "ngx-toastr";
import { GoogleAnalyticsService } from "ngx-google-analytics";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
export class ServicesComponent implements OnInit {
  constructor(private toastr: ToastrService, private $gaService: GoogleAnalyticsService) { }

  ngOnInit() { }

  play(
    source: string = "assets/album/01.mp3",
    label: string = "01. Life is a Journey (feat. Thiago Alves)",
    track: number = 1
  ) {
    this.stop(true);
    NavbarComponent.play(source);
    this.toastr.info(label, "Now Playing");
    this.$gaService.event('song_play_clicked', 'song_plays', 'song_number', track);
  }

  stop(silent: boolean = false) {
    NavbarComponent.stop();
    if (!silent) this.toastr.error("", "Media Halted");
  }
}
