import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgilidadArimeticaComponent } from './agilidad-arimetica.component';

describe('AgilidadArimeticaComponent', () => {
  let component: AgilidadArimeticaComponent;
  let fixture: ComponentFixture<AgilidadArimeticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgilidadArimeticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgilidadArimeticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
