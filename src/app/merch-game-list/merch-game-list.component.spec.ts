import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchGameListComponent } from './merch-game-list.component';

describe('MerchGameListComponent', () => {
  let component: MerchGameListComponent;
  let fixture: ComponentFixture<MerchGameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchGameListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchGameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
