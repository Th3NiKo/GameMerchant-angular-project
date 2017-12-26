import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchLoginComponent } from './merch-login.component';

describe('MerchLoginComponent', () => {
  let component: MerchLoginComponent;
  let fixture: ComponentFixture<MerchLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
