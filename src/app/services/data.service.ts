import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable ( //{
//   providedIn: 'root' -- no hace falta que el service este disponible en toda la app 
//}
)
export class DataService {
  private URL_API = 'https://restcountries.eu/rest/v2/all';

  constructor(private http: HttpClient) { }

  // <any> porque no se creo una interface
  getAllCountries(): Observable<any[]>{
    return this.http.get<any[]>(this.URL_API);
  }
}
