import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginSecurityComponent } from './user-login-security.component';

describe('UserLoginSecurityComponent', () => {
  let component: UserLoginSecurityComponent;
  let fixture: ComponentFixture<UserLoginSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoginSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
