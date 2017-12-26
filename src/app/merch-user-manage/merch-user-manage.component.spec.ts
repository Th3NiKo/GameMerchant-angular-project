import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchUserManageComponent } from './merch-user-manage.component';

describe('MerchUserManageComponent', () => {
  let component: MerchUserManageComponent;
  let fixture: ComponentFixture<MerchUserManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchUserManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchUserManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
