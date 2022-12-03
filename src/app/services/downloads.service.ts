import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

const DOWNLOAD_COUNTER = "local_download_counter";

@Injectable({
    providedIn: 'root',
})
export class DownloadService {

    constructor(private http: HttpClient, private $gaService: GoogleAnalyticsService, @Inject(PLATFORM_ID) platformId: Object, private toastr: ToastrService) {

        this.isBrowser = isPlatformBrowser(platformId);

        if (this.isBrowser) {
            if (localStorage.getItem(DOWNLOAD_COUNTER) === undefined) {
                localStorage.setItem(DOWNLOAD_COUNTER, "0");
            }
        }
    }

    ipSubject = new Subject<Object>();
    ipObject = {};
    private isBrowser: boolean;

    async emitDownload(email?: string) {
        await this.track(email);
        this.$gaService.event('album_download_clicked', 'album_download', 'Downloads');
    }

    private async track(email) {
        // console.log("Fetching IP Address");
        // console.log(email);
        this.http.get(environment.ipApiUrl).subscribe(async (res: any) => {
            // console.log(res);
            await this.add(email, res);
            // this.ipSubject.next(res);
        });
    }

    async hit() {
        this.http.get(environment.ipApiUrl).subscribe(async (res: any) => {
            let connection = res['connection'];
            let currency = res['currency'];
            let flag = res['flag'];
            let security = res['security'];
            let timezone = res['timezone'];
            delete res['connection'];
            delete res['currency'];
            delete res['flag'];
            delete res['security'];
            delete res['timezone'];
            res['connection'] = JSON.stringify(connection);
            res['currency'] = JSON.stringify(currency);
            res['flag'] = JSON.stringify(flag);
            res['security'] = JSON.stringify(security);
            res['timezone'] = JSON.stringify(timezone);
            this.http.post(`${environment.apiUrl}/hit`, { id: 0, ...res }).subscribe((res: any) => {

            }, (err) => {

            });
        });
    }

    async add(email?: string, ip?: Object) {
        // console.log(`'${email}' add attempt`);
        if (email) {
            let connection = ip['connection'];
            let currency = ip['currency'];
            let flag = ip['flag'];
            let security = ip['security'];
            let timezone = ip['timezone'];
            delete ip['connection'];
            delete ip['currency'];
            delete ip['flag'];
            delete ip['security'];
            delete ip['timezone'];
            ip['connection'] = JSON.stringify(connection);
            ip['currency'] = JSON.stringify(currency);
            ip['flag'] = JSON.stringify(flag);
            ip['security'] = JSON.stringify(security);
            ip['timezone'] = JSON.stringify(timezone);
            this.http.post(`${environment.apiUrl}/email`, { id: 0, email, ...ip }).subscribe((res: any) => {
                // console.log(res);
                this.toastr.success("You have successfully been added to the drop list. Details to come soon.", "Success!");
            }, (err) => {
                // console.error(err);
                this.toastr.error("There was an error adding you to the drop. Please downlaod again, perhaps with a different email, or you will not get your free crypto.", "Error");
            });
        }
    }


    init() {
        this.ipSubject.subscribe({
            next: (ip) => {
                try {
                    // this.http.post(environment.apiUrl + "/email", ip).subscribe((res: any) => {
                    //     console.log("Download emitted!");
                    // })
                } catch (err) {
                    // console.log(err);
                }
            }
        })
    }
}
