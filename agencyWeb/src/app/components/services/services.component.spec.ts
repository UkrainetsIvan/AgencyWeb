import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ServicesComponent} from './services.component';
import { ActivatedRoute } from '@angular/router'; // Імпортуйте ActivatedRoute
import { of } from 'rxjs'; // Імпортуйте of з rxjs

describe('AboutUsComponent', () => {
  let component: ServicesComponent;
  let fixture: ComponentFixture<ServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesComponent], // Зміна з declarations на imports
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 }) // Приклад мок-даних
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

