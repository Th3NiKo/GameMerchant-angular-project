import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchHeaderComponent } from './merch-header.component';

describe('MerchHeaderComponent', () => {
  let component: MerchHeaderComponent;
  let fixture: ComponentFixture<MerchHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
