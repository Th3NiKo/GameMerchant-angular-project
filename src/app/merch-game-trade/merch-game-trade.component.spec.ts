import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchGameTradeComponent } from './merch-game-trade.component';

describe('MerchGameTradeComponent', () => {
  let component: MerchGameTradeComponent;
  let fixture: ComponentFixture<MerchGameTradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchGameTradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchGameTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
