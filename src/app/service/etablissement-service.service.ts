import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EtablissementServiceService {

  constructor(protected http: HttpClient) { }
  public getEtablissements() {
    return this.http.get("https://jsonplaceholder.typicode.com/todos", this.httpHearder())
      .pipe(catchError(this.handleError));
  }

  public httpHearder() {
    const _header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return { "headers": _header }
  }

  protected handleError(error) {
    return throwError(error);
  }
}
