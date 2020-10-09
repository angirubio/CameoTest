import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionesClaseComponent } from './peticiones-clase.component';

describe('PeticionesClaseComponent', () => {
  let component: PeticionesClaseComponent;
  let fixture: ComponentFixture<PeticionesClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeticionesClaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeticionesClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
