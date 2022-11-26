import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GoogleAnalyticsService } from 'ngx-google-analytics';


const DOWNLOAD_COUNTER = "local_download_counter";

@Injectable({
    providedIn: 'root',
})
export class DownloadService {

    constructor(private http: HttpClient, private $gaService: GoogleAnalyticsService) {
        if (localStorage.getItem(DOWNLOAD_COUNTER) === undefined) {
            localStorage.setItem(DOWNLOAD_COUNTER, "0");
        }
    }

    ipSubject = new Subject<Object>();

    emitDownload() {
        // this.getIPAddress();
        let count = Number(localStorage.getItem(DOWNLOAD_COUNTER)) + 1;
        console.log(count);
        localStorage.setItem(DOWNLOAD_COUNTER, String(count));
        this.$gaService.event('album_download_clicked', 'album_download', 'Downloads', count);
    }

    // private async getIPAddress() {
    //     console.log("Fetching IP Address");
    //     await this.http.get(environment.ipApiUrl).subscribe((res: any) => {
    //         console.log(res);
    //         this.ipSubject.next(res);
    //     });
    // }

    init() {
        this.ipSubject.subscribe({
            next: (ip) => {
                try {
                    this.http.post(environment.apiUrl + "/downloads", ip).subscribe((res: any) => {
                        console.log("Download emitted!");
                    })
                } catch (err) {
                    console.log(err);
                }
            }
        })
    }
}