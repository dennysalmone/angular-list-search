import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page/search-page.component';
import { SeachingRoutingModule } from './searching-routing.module';
import { FormsModule } from '@angular/forms';
import { LimitSymbols } from '../shared/pipes/max-symbols.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    SearchPageComponent,
    LimitSymbols
  ],
  imports: [
    CommonModule,
    SeachingRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class SearchingModule { }
