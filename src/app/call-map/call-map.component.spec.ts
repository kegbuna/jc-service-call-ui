import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallMapComponent } from './call-map.component';

describe('CallMapComponent', () => {
  let component: CallMapComponent;
  let fixture: ComponentFixture<CallMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
