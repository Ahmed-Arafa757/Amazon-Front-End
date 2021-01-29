import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSellersComponent } from './top-sellers.component';

describe('TopSellersComponent', () => {
  let component: TopSellersComponent;
  let fixture: ComponentFixture<TopSellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopSellersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
