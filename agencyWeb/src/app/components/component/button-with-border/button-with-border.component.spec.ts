import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithBorderComponent } from './button-with-border.component';

describe('ButtonWithBorderComponent', () => {
  let component: ButtonWithBorderComponent;
  let fixture: ComponentFixture<ButtonWithBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonWithBorderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonWithBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
