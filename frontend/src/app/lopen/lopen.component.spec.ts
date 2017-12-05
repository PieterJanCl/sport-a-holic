import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LopenComponent } from './lopen.component';

describe('LopenComponent', () => {
  let component: LopenComponent;
  let fixture: ComponentFixture<LopenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LopenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LopenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
