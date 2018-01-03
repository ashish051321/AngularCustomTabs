import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JbtabComponent } from './jbtab.component';

describe('JbtabComponent', () => {
  let component: JbtabComponent;
  let fixture: ComponentFixture<JbtabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JbtabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JbtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
