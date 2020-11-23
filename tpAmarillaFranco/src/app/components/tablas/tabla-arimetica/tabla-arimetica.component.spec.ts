import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaArimeticaComponent } from './tabla-arimetica.component';

describe('TablaArimeticaComponent', () => {
  let component: TablaArimeticaComponent;
  let fixture: ComponentFixture<TablaArimeticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaArimeticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaArimeticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
