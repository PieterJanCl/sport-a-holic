import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZwemmenComponent } from './zwemmen.component';

describe('ZwemmenComponent', () => {
  let component: ZwemmenComponent;
  let fixture: ComponentFixture<ZwemmenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZwemmenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZwemmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
