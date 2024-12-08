import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModernWayComponent } from './user-modern-way.component';

describe('UserModernWayComponent', () => {
  let component: UserModernWayComponent;
  let fixture: ComponentFixture<UserModernWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserModernWayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserModernWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
