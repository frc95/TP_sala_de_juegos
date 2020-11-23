import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMemotestComponent } from './tabla-memotest.component';

describe('TablaMemotestComponent', () => {
  let component: TablaMemotestComponent;
  let fixture: ComponentFixture<TablaMemotestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaMemotestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMemotestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
