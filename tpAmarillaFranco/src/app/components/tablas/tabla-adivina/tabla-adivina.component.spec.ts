import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAdivinaComponent } from './tabla-adivina.component';

describe('TablaAdivinaComponent', () => {
  let component: TablaAdivinaComponent;
  let fixture: ComponentFixture<TablaAdivinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAdivinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAdivinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
