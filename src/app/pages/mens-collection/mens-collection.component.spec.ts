import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensCollectionComponent } from './mens-collection.component';

describe('MensCollectionComponent', () => {
  let component: MensCollectionComponent;
  let fixture: ComponentFixture<MensCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
