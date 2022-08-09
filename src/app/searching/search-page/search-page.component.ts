import { Component, OnDestroy, OnInit } from '@angular/core';
import { distinctUntilChanged, Observable, Subject, debounceTime, switchMap } from 'rxjs';


import { IAnimal } from 'src/app/shared/interfaces/interfaces';
import { MockRequestService } from 'src/app/shared/services/mock-request/mock-request.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnDestroy {

  public inputValue: string;
  public counter: number;
  public animals: IAnimal[];
  public animals$: Observable<IAnimal[]>;
  public subject$: Subject<string> = new Subject<string>();

  constructor(private mockService: MockRequestService) { }

  ngOnInit(): void {
    this.subscribeChanges();
  }

  subscribeChanges(): void {
    this.mockService.getAnimals().subscribe({
      next: (res: IAnimal[]) => {
        this.animals = res;
        console.log(res);
      },
    });

    this.subject$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((text: string) => this.mockService.seachAnimals(text))
    ).subscribe(res => this.animals = res)
    
  }

  onInput(): void {
    console.log(this.inputValue)
    this.subject$.next(this.inputValue)
  }

  ngOnDestroy(): void {

  }

}
