import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { distinctUntilChanged, debounceTime, switchMap, BehaviorSubject, Subscription, Subject } from 'rxjs';

import { IAnimal } from 'src/app/shared/interfaces/interfaces';
import { MockRequestService } from 'src/app/shared/services/mock-request/mock-request.service';

@Component({
  selector: 'app-home-page-animal',
  templateUrl: './home-page-animal.component.html',
  styleUrls: ['./home-page-animal.component.scss']
})
export class HomepageAnimalComponent implements OnInit, OnDestroy {

  public pageCounter: number = 0;
  public animals: IAnimal[];
  public inputNameBeh$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public inputNameSubj$: Subject<string> = new Subject<string>();
  public totalPages: number = 0;
  public notLoaded: boolean = true;
  public form: FormGroup = this.fb.group({
    name: [''],
  });

  private readonly ms: number = 500;
  private readonly perPage = 6;

  constructor(private mockService: MockRequestService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formChangesSubscribe();
    this.subscribeChanges();
  }
  
  ngOnDestroy(): void {
    this.inputNameBeh$.unsubscribe();
    this.inputNameSubj$.unsubscribe();
  }

  formChangesSubscribe(): void {
    this.form.get('name').valueChanges.subscribe(change => {
      this.inputNameBeh$.next(change)
    })
  }

  subscribeChanges(): void {
    this.inputNameBeh$.pipe(
      debounceTime(this.ms),
      distinctUntilChanged(),
      switchMap((text: string) => this.mockService.searchAnimals(text, 0, this.perPage))
    ).subscribe(res => {
      this.notLoaded = false;
      this.animals = res.data;
      this.pageCounter = 0;
      this.totalPages = Math.ceil(res.amount/this.perPage)-1;
    })

    this.inputNameSubj$.pipe(
      switchMap((text: string) => this.mockService.searchAnimals(text, this.pageCounter, this.perPage))
    ).subscribe(res => {
      this.animals = res.data;
      this.totalPages = Math.ceil(res.amount/this.perPage)-1;
    })
  }

  previousPage(): void {
    this.pageCounter = --this.pageCounter;
    this.inputNameSubj$.next(this.form.value.name);
  }

  nextPage(): void {
    this.pageCounter = ++this.pageCounter;
    this.inputNameSubj$.next(this.form.value.name);
  }

}