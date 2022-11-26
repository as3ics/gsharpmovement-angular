/** @format */

import { Component, OnInit } from "@angular/core";
import { DownloadService } from "src/app/services/downloads.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-home-one",
  templateUrl: "./home-one.component.html",
  styleUrls: ["./home-one.component.scss"],
})
export class HomeOneComponent implements OnInit {

  buttonText: string = environment.downloadButtonText;

  constructor(private downloadService: DownloadService) { }

  ngOnInit() { }

  async emitDownload() {
    await this.downloadService.emitDownload();
  }
}
