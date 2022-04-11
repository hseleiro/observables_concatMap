import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  Observable,
  throwError }
  from 'rxjs';
import {
  map,
  catchError
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  constructor(private httpClient: HttpClient) {}

  searchCountryByName(name: string): Observable<any[]>{
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append(
      'X-RapidAPI-Key',
      '1108554cc1mshf11c17c4fea2b3dp179054jsn2446fb7a8965'
    );
    return this.httpClient.get(
      `https://restcountries-v1.p.rapidapi.com/capital/` + name,
      {headers: headers}
    ).pipe(
      map((data: any) => {
        return data;
      }), catchError( error => {
        return throwError( 'Capital not found!' );
      })
    )
  }
}

/*
* const options = {
  method: 'GET',
  url: 'https://jayeshtharani-listcountries-v1.p.rapidapi.com/listallcountries',
  headers: {
    Authorization: 'undefined',
    'X-RapidAPI-Host': 'jayeshtharani-listcountries-v1.p.rapidapi.com',
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
  }
};

* */
