import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UserService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent],
      providers: [UserService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create UserComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should use user name from UserService', () => {
    expect(userService.user.name).toEqual(component.user.name);
  });

  it('should display username if user logged in', () => {
    component.isLoggedIn = true;
    fixture.detectChanges();
    let compiled: HTMLElement = fixture.nativeElement;
    let p = compiled.querySelector("p");
    expect(p?.textContent).toContain(component.user.name);
  });

  it('shouldn\'t display username if user not logged in', () => {
    component.isLoggedIn = false;
    fixture.detectChanges();
    let compiled: HTMLElement = fixture.nativeElement;
    let p = compiled.querySelector("p");
    expect(p?.textContent).not.toContain(component.user.name);
  });

});
