import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListStartComponent } from './users-list-start.component';

describe('UsersListStartComponent', () => {
  let component: UsersListStartComponent;
  let fixture: ComponentFixture<UsersListStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
