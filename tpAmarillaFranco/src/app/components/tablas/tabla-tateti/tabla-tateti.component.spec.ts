import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTatetiComponent } from './tabla-tateti.component';

describe('TablaTatetiComponent', () => {
  let component: TablaTatetiComponent;
  let fixture: ComponentFixture<TablaTatetiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaTatetiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaTatetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
