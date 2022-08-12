import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable, delay } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IAnimal } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MockRequestService {

  constructor(private http: HttpClient) {
  }

  searchAnimalsById(id: number): Observable<IAnimal> {
    return this.http.get<IAnimal[]>(`${environment.url}`)
    .pipe(
      delay(200),
      map(animals => (
        animals
        .find(animal => animal.id === id)
      ))
    )
  }

  searchAnimals(text: string = '', page: number, limit: number): Observable<{amount: number, data: IAnimal[]}> {
    return this.http.get<IAnimal[]>(`${environment.url}`)
      .pipe(
        delay(200),
        map(animals => ({
          data: animals
          .filter(animal => animal.name.toLowerCase().includes(text))
          .slice(page * limit, page * limit + limit),
          amount: animals
          .filter(animal => animal.name.toLowerCase().includes(text))
          .length
        }))
      )
  }

}
