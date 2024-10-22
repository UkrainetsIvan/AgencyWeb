import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWhiteSmallComponent } from './button-white-small.component';

describe('ButtonWhiteSmallComponent', () => {
  let component: ButtonWhiteSmallComponent;
  let fixture: ComponentFixture<ButtonWhiteSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonWhiteSmallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonWhiteSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
