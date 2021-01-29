import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverAmazonComponent } from './discover-amazon.component';

describe('DiscoverAmazonComponent', () => {
  let component: DiscoverAmazonComponent;
  let fixture: ComponentFixture<DiscoverAmazonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverAmazonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverAmazonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
