import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLazyComponent } from './first-lazy.component';

describe('FirstLazyComponent', () => {
  let component: FirstLazyComponent;
  let fixture: ComponentFixture<FirstLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
