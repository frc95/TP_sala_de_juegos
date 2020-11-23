import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAnagramaComponent } from './tabla-anagrama.component';

describe('TablaAnagramaComponent', () => {
  let component: TablaAnagramaComponent;
  let fixture: ComponentFixture<TablaAnagramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAnagramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAnagramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
