import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderoAboutComponent } from './sendero-about.component';

describe('SenderoAboutComponent', () => {
  let component: SenderoAboutComponent;
  let fixture: ComponentFixture<SenderoAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SenderoAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenderoAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
