import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarClaseComponent } from './publicar-clase.component';

describe('PublicarClaseComponent', () => {
  let component: PublicarClaseComponent;
  let fixture: ComponentFixture<PublicarClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicarClaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
