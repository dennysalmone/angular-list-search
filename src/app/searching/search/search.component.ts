import { Component, EventEmitter, forwardRef, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
    providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SearchComponent),
    multi: true
  }]
})
export class SearchComponent implements OnInit, ControlValueAccessor {

  public name = new FormControl<string>('');
  public subscription: Subscription;
  public onChange: Function;
  public onTouch: Function;

  writeValue(value: string): void {
    this.name.setValue(value);
  }

  registerOnChange(func: Function): void {
    this.onChange = func;
  }

  registerOnTouched(func: Function): void {
    this.onTouch = func;
  }

  ngOnInit(): void {
    this.name.valueChanges.subscribe((value) => {
      if(this.onChange) {
        this.onChange(value)
      }
    })
  }

}
