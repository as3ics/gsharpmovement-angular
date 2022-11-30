/** @format */

import { Component, OnInit } from "@angular/core";
import { DownloadService } from "src/app/services/downloads.service";
import { environment } from "src/environments/environment";
import { Meta, Title } from "@angular/platform-browser";
import { ToastrService } from "ngx-toastr";

// const SibApiV3Sdk = require("@sendinblue/client");
// let defaultClient = SibApiV3Sdk.ApiClient.instance;

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

  constructor(
    private downloadService: DownloadService,
    private meta: Meta,
    private title: Title,
    private toastr: ToastrService
  ) {
    this.title.setTitle(
      "Free Album Giveaway of Gadfly & G# Movement's We Shall Prevail (2022 Remaster)"
    );
    this.meta.addTags([
      {
        name: "description",
        content:
          "The home of Gadfly & G# Movement where they are giving away their new indie folk-rock album for free.",
      },
      { name: "author", content: "Zach DeGeorge" },
      {
        name: "keywords",
        content:
          "Gadfly, G# Movement, indie, music, folk-rock, We Shall Prevail, Zach DeGeorge, Zachary DeGeorge, Samuel P Lauzon, Tobi Wats, Thiago Alves, Matt Mooney, Chase Holton, Doug Cowan, Timmy Jay, Domenick DeGeorge, The Usual Stoopkid, new music, free music",
      },
      { name: "robots", content: "index, follow" },
      { charset: "UTF-8" },
      { name: "date", content: "2022-11-26", scheme: "YYYY-MM-DD" },
      { name: "msvalidate.01", content: "A3AF8306380177A005ED45495E44FF9F" },
      { name: "og:title", content: "Free Album Giveaway" },
      {
        name: "og:description",
        content:
          "We just launched our new website and to celebrate we are giving away our album. Get your free copy only on the website.",
      },
      { name: "og:image", content: "assets/album/cover.jpg" },
      { name: "og:url", content: "https://gsharpmovement.com/" },
    ]);
  }

  ngOnInit() {
    // let apiKey = defaultClient.authentications[environment.sendinblue];
    // apiKey.apiKey = environment.sendinblue;
  }

  async emitDownload() {
    await this.downloadService.emitDownload();
    await this.createContact(this.email);
    this.email.value = "";
    this.download("assets/album/we_shall_prevail.zip");
    this.toastr.success(
      "Thank you for showing your support for us. Your download has been initiated.",
      "Thank you!"
    );
  }

  download(url) {
    const a = document.createElement("a");
    a.href = url;
    a.download = url.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  async createContact(email) {
    // let apiInstance = new SibApiV3Sdk.ContactsApi();
    // let createContact = new SibApiV3Sdk.CreateContact();
    // createContact.email = email;
    // createContact.listIds = [environment.list_id];
    // apiInstance.createContact(createContact).then(
    //   function (data) {
    //     console.log(
    //       "API called successfully. Returned data: " + JSON.stringify(data)
    //     );
    //   },
    //   function (error) {
    //     console.error(error);
    //   }
    // );
  }
}
