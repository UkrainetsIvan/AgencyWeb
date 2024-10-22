import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplyDummyTextComponent } from './simply-dummy-text.component';

describe('SimplyDummyTextComponent', () => {
  let component: SimplyDummyTextComponent;
  let fixture: ComponentFixture<SimplyDummyTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimplyDummyTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplyDummyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
