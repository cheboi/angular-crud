import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  apiUrl: string = 'http://localhost:3000/books';
  headers = new HttpHeaders().set('content-type', 'applivation/json');

  constructor(private httpClient: HttpClient) { }

  list(): Observable<any>{
    return this.httpClient.get(this.apiUrl).pipe(
      catchError(this.handleError)
    )
  }

  getItem(id: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, data).pipe(
      catchError(this.handleError)
    )
  }

  //edit /update
  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, data).pipe(
      catchError(this.handleError)
    )
  }

  //search By Name

  filterByTitle(title: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}?title=${title}`).pipe(
      catchError(this.handleError)
    )
  }

  // error handling
  handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log('An error occured:', error.error.message);
    }
    else{
      console.error(
        `Backebd return code ${error.status}` + `body was: ${error.error}`
      )
    }

    return throwError(() => {
      return 'Something bad happened; please try again later.';
  });
  }
}
