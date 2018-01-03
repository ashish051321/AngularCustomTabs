import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JbtabsComponent } from './jbtabs.component';

describe('JbtabsComponent', () => {
  let component: JbtabsComponent;
  let fixture: ComponentFixture<JbtabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JbtabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JbtabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
