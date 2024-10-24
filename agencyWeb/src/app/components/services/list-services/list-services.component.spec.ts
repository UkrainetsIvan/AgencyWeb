import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServicesComponent } from './list-services.component';

describe('ListServicesComponent', () => {
  let component: ListServicesComponent;
  let fixture: ComponentFixture<ListServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
