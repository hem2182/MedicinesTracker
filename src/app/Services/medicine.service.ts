import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { MedicinesModel } from '../Models/medicines-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http: HttpClient) { }

  getMedicines(): Observable<MedicinesModel[]> {
    return this.http.get<MedicinesModel[]>('http://localhost:52553/api/medicines');
  }

  getMedicinesById(id: number): Observable<MedicinesModel> {
    return this.http.get<MedicinesModel>('http://localhost:52553/api/medicines/' + id);
  }

  addMedicines(data: MedicinesModel): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<string>('http://localhost:52553/api/Medicines', data, httpOptions);

  }

  // private handleError(errorResponse: HttpErrorResponse) {
  //   if (errorResponse.error instanceof ErrorEvent) {
  //     console.error('Client Side Error:' + errorResponse.error.message);
  //   } else {
  //     console.error('Server Side Error:' + errorResponse);
  //   }

  //   return new ErrorObservable('There is a problem with the service. We are notified and are working on it.');
  // }

}
