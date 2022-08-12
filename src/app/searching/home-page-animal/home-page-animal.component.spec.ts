import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageAnimalComponent } from './home-page-animal.component';

describe('HomepageAnimalComponent', () => {
  let component: HomepageAnimalComponent;
  let fixture: ComponentFixture<HomepageAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
