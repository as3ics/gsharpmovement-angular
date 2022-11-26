/** @format */

import { Component, OnInit } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
export class ServicesComponent implements OnInit {
  constructor(private toastr: ToastrService) { }

  ngOnInit() { }

  play(
    source: string = "assets/album/01.mp3",
    label: string = "01. Life is a Journey (feat. Thiago Alves)"
  ) {
    this.stop(true);
    NavbarComponent.play(source);
    this.toastr.info(label, "Now Playing");
  }

  stop(silent: boolean = false) {
    NavbarComponent.stop();
    if (!silent) this.toastr.error("We hope you enjoyed our music.", "Media Playback Halted");
  }
}
