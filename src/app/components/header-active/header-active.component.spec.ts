import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderActiveComponent } from './header-active.component';

describe('HeaderActiveComponent', () => {
  let component: HeaderActiveComponent;
  let fixture: ComponentFixture<HeaderActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
