import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBlueSmallComponent } from './button-blue-small.component';

describe('ButtonBlueSmallComponent', () => {
  let component: ButtonBlueSmallComponent;
  let fixture: ComponentFixture<ButtonBlueSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonBlueSmallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonBlueSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
