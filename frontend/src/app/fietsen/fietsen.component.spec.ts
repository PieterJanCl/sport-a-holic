import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FietsenComponent } from './fietsen.component';

describe('FietsenComponent', () => {
  let component: FietsenComponent;
  let fixture: ComponentFixture<FietsenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FietsenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FietsenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
