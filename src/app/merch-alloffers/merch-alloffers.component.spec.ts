import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchAlloffersComponent } from './merch-alloffers.component';

describe('MerchAlloffersComponent', () => {
  let component: MerchAlloffersComponent;
  let fixture: ComponentFixture<MerchAlloffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchAlloffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchAlloffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
