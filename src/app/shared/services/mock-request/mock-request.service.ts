import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAnimal } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MockRequestService {

  constructor(private http: HttpClient) {
  }

  getAnimals(): Observable<IAnimal[]> {
    return this.http.get<IAnimal[]>(`${environment.url}`)
  }

  seachAnimals(text: string): Observable<IAnimal[]> {
    console.log('seachAnimals')
    if(text.length < 1) {
      console.log('empty')
      return this.getAnimals();
    }
    return this.http.get<IAnimal[]>(`${environment.url}/?name=${text}`)
  }

}
