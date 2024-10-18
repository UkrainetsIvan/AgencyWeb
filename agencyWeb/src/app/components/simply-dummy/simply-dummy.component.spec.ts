import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplyDummyComponent } from './simply-dummy.component';

describe('SimplyDummyComponent', () => {
  let component: SimplyDummyComponent;
  let fixture: ComponentFixture<SimplyDummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimplyDummyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplyDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
