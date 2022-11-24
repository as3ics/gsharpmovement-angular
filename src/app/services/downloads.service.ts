import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class DownloadService {

    constructor(private http: HttpClient) { }

    ipSubject = new Subject<Object>();

    emitDownload() {
        this.getIPAddress();
    }

    private async getIPAddress() {
        console.log("Fetching IP Address");
        await this.http.get(environment.ipApiUrl).subscribe((res: any) => {
            console.log(res);
            this.ipSubject.next(res);
        });
    }

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