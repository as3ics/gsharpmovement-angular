/** @format */

import { Component, OnInit, OnDestroy } from "@angular/core";
import { DownloadService } from "src/app/services/downloads.service";
import { environment } from "src/environments/environment";
import { Meta, Title } from "@angular/platform-browser";
import { interval, Subscription } from "rxjs";

@Component({
  selector: "app-home-one",
  templateUrl: "./home-one.component.html",
  styleUrls: ["./home-one.component.scss"],
})
export class HomeOneComponent implements OnInit {

  buttonText: string = environment.downloadButtonText;
  email = {
    value: "",
  };
  emailRegex = environment.email_regex;
  private subscription: Subscription;

  public dateNow = new Date();
  public dDay = new Date('Jan 01 2023 00:00:00');
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;

  public timeDifference;
  public secondsToDday;
  public minutesToDday;
  public hoursToDday;
  public daysToDday;


  constructor(private downloadService: DownloadService, private meta: Meta, private title: Title) {
    this.title.setTitle("Free Album Giveaway of Gadfly & G# Movement's We Shall Prevail (2022 Remaster)");
    this.meta.addTags([
      { name: "description", content: "The home of Gadfly & G# Movement where they are giving away their new indie folk-rock album for free." },
      { name: "author", content: "Zach DeGeorge" },
      { name: "keywords", content: "Gadfly, G# Movement, indie, music, folk-rock, We Shall Prevail, Zach DeGeorge, Zachary DeGeorge, Samuel P Lauzon, Tobi Wats, Thiago Alves, Matt Mooney, Chase Holton, Doug Cowan, Timmy Jay, Domenick DeGeorge, The Usual Stoopkid, new music, free music" },
      { name: "robots", content: "index, follow" },
      { charset: "UTF-8" },
      { name: "date", content: "2022-11-26", scheme: "YYYY-MM-DD" },
      { name: "msvalidate.01", content: "A3AF8306380177A005ED45495E44FF9F" },
      { name: "og:title", content: "Free Album Giveaway" },
      { name: "og:description", content: "We just launched our new website and to celebrate we are giving away our album. Get your free copy only on the website." },
      { name: "og:image", content: "assets/album/cover.jpg" },
      { name: "og:url", content: "https://gsharpmovement.com/" }
    ])
  }

  ngOnInit() {
    this.subscription = interval(1000)
      .subscribe(x => { this.getTimeDifference(); });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async emitDownload() {
    await this.downloadService.emitDownload(this.email.value);
    this.email.value = "";
  }


  private getTimeDifference() {
    this.timeDifference = this.dDay.getTime() - new Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits(timeDifference) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }

}
