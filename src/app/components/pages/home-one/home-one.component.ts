/** @format */

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-one",
  templateUrl: "./home-one.component.html",
  styleUrls: ["./home-one.component.scss"],
})
export class HomeOneComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  download() {
    const link = document.createElement("a");
    link.setAttribute("target", "_blank");
    link.setAttribute("href", "assets/album/we_shall_prevail.zip");
    link.setAttribute("download", `we_shall_prevail.zip`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
