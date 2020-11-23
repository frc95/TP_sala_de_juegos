import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTBBComponent } from './tabla-tbb.component';

describe('TablaTBBComponent', () => {
  let component: TablaTBBComponent;
  let fixture: ComponentFixture<TablaTBBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaTBBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaTBBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
