import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutLaterProjectComponent } from './out-later-project.component';

describe('OutLaterProjectComponent', () => {
  let component: OutLaterProjectComponent;
  let fixture: ComponentFixture<OutLaterProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutLaterProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutLaterProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
