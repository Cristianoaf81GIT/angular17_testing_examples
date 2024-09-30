import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { DataService } from '../shared/Data.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UserService;
  let dataService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent],
      providers: [UserService, DataService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    dataService = TestBed.inject(DataService);
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

  it('shouldn\t fetch data successfully if not called asynchronously', () => {
    spyOn(dataService, "getDetails").and.returnValue(Promise.resolve("Data"));
    fixture.detectChanges();
    expect(component.data).toBe(undefined);
  });

  it('should fetch data successfully if called asynchronously', fakeAsync(() => {
    spyOn(dataService, "getDetails").and.returnValue(Promise.resolve("Data"));
    component.ngOnInit();
    tick(2000);
    fixture.detectChanges();
    expect(component.data).toBeDefined();
    expect(component.data).toBe("Data");
  }));
});
