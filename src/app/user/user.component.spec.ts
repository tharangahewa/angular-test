import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let element: HTMLElement;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject UserService', () => {
    const userService: UserService = fixture.debugElement.injector.get(UserService);
    expect(component.user).toEqual(userService.user);
  });

  it('should render username when logged in', () => {
    component.loggedIn = true;
    fixture.detectChanges();
    const userService: UserService = fixture.debugElement.injector.get(UserService);
    expect(element.querySelector('p').textContent).toContain(userService.user.username);
  });

  it('should render username when logged in', () => {
    expect(element.querySelector('p').textContent).toContain('Please log in');
  });
});
