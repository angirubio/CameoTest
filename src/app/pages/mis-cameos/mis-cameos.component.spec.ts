import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCameosComponent } from './mis-cameos.component';

describe('MisCameosComponent', () => {
  let component: MisCameosComponent;
  let fixture: ComponentFixture<MisCameosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisCameosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisCameosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
