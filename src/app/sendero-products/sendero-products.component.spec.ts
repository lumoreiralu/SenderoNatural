import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderoProductsComponent } from './sendero-products.component';

describe('SenderoProductsComponent', () => {
  let component: SenderoProductsComponent;
  let fixture: ComponentFixture<SenderoProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SenderoProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenderoProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
