import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeachingRoutingModule } from './searching-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LimitSymbols } from '../shared/pipes/max-symbols.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AnimalsComponent } from './animals/animals.component';
import { SearchComponent } from './search/search.component';
import { DetailAnimalComponent } from './detail-animal/detail-animal.component';
import { HomepageAnimalComponent } from './home-page-animal/home-page-animal.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    HomepageAnimalComponent,
    LimitSymbols,
    AnimalsComponent,
    SearchComponent,
    DetailAnimalComponent
  ],
  imports: [
    CommonModule,
    SeachingRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class SearchingModule { }
