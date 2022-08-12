import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailAnimalComponent } from './detail-animal/detail-animal.component';
import { HomepageAnimalComponent } from './home-page-animal/home-page-animal.component';

const routes: Routes = [
  {
    path: "search", component: HomepageAnimalComponent,
  },
  {
    path: "animal/:id", component: DetailAnimalComponent,
  },
  {
    path: "**", redirectTo: "search",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeachingRoutingModule {
}