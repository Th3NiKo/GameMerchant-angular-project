import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchGameDetailsComponent } from './merch-game-details.component';

describe('MerchGameDetailsComponent', () => {
  let component: MerchGameDetailsComponent;
  let fixture: ComponentFixture<MerchGameDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchGameDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchGameDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
