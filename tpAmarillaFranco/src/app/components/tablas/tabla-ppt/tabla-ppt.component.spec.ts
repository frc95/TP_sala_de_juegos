import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPPTComponent } from './tabla-ppt.component';

describe('TablaPPTComponent', () => {
  let component: TablaPPTComponent;
  let fixture: ComponentFixture<TablaPPTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPPTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPPTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
