import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DownloadService } from 'src/app/services/downloads.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  buttonText: string = environment.downloadButtonText;

  constructor(private downloadService: DownloadService) { }

  ngOnInit() {
  }

  async emitDownload() {
    await this.downloadService.emitDownload();
  }

}
