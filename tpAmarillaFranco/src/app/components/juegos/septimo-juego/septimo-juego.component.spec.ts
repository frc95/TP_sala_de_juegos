import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptimoJuegoComponent } from './septimo-juego.component';

describe('SeptimoJuegoComponent', () => {
  let component: SeptimoJuegoComponent;
  let fixture: ComponentFixture<SeptimoJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeptimoJuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeptimoJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
