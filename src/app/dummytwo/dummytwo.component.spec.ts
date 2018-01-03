import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummytwoComponent } from './dummytwo.component';

describe('DummytwoComponent', () => {
  let component: DummytwoComponent;
  let fixture: ComponentFixture<DummytwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummytwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummytwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
