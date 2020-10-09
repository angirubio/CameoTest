import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizarClasesComponent } from './organizar-clases.component';

describe('OrganizarClasesComponent', () => {
  let component: OrganizarClasesComponent;
  let fixture: ComponentFixture<OrganizarClasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizarClasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizarClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
