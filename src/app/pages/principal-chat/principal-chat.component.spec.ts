import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalChatComponent } from './principal-chat.component';

describe('PrincipalChatComponent', () => {
  let component: PrincipalChatComponent;
  let fixture: ComponentFixture<PrincipalChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
