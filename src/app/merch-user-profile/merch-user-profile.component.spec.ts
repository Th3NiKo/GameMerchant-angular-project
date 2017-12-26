import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchUserProfileComponent } from './merch-user-profile.component';

describe('MerchUserProfileComponent', () => {
  let component: MerchUserProfileComponent;
  let fixture: ComponentFixture<MerchUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
