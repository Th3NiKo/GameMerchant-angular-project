import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchUserGamesComponent } from './merch-user-games.component';

describe('MerchUserGamesComponent', () => {
  let component: MerchUserGamesComponent;
  let fixture: ComponentFixture<MerchUserGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchUserGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchUserGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
