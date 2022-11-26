import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DownloadService } from 'src/app/services/downloads.service';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnInit {

  buttonText: string = environment.downloadButtonText;

  constructor(private downloadService: DownloadService) { }

  ngOnInit() {
  }

  async emitDownload() {
    await this.downloadService.emitDownload();
  }

}
