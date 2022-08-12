import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, delay } from 'rxjs';
import { IAnimal } from 'src/app/shared/interfaces/interfaces';
import { MockRequestService } from 'src/app/shared/services/mock-request/mock-request.service';

@Component({
  selector: 'app-detail-animal',
  templateUrl: './detail-animal.component.html',
  styleUrls: ['./detail-animal.component.scss']
})
export class DetailAnimalComponent implements OnInit {

  public id: number;
  public animal: IAnimal;
  public notLoaded: boolean = true;

  constructor(private route: ActivatedRoute, private mockService: MockRequestService) { }

  ngOnInit() {
    this.setId();
    this.subscribeChanges();
  }

  setId(): void {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    ).subscribe(data => this.id = +data);
  }

  subscribeChanges(): void {
    this.mockService.searchAnimalsById(this.id).subscribe(res => {
      this.animal = res;
      this.notLoaded = false;
    });
  }

    
}
