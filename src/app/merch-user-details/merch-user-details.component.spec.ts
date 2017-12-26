import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchUserDetailsComponent } from './merch-user-details.component';

describe('MerchUserDetailsComponent', () => {
  let component: MerchUserDetailsComponent;
  let fixture: ComponentFixture<MerchUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
