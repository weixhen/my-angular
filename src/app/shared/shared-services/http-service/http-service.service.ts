import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-bootstrap-spinner';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) { }

  request_general_get(endpoint: string) {
    this.spinner.show();
    const general_options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }),
    };
    return Observable.create((observer: { next: (arg0: Object) => void; complete: () => void; }) => this.http.get(endpoint, general_options).subscribe(
      data => {
        observer.next(data);
        observer.complete();
        this.spinner.hide();
      },
      (err: HttpErrorResponse) => {
        this.spinner.hide();
        console.log(err); //TODO: ERROR HANDLING
      }
      ));
  }
}
