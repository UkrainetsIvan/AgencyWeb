import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutUsComponent } from './about-us.component'; // Ваш компонент
import { ActivatedRoute } from '@angular/router'; // Імпортуйте ActivatedRoute
import { of } from 'rxjs'; // Імпортуйте of з rxjs

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsComponent], // Зміна з declarations на imports
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
    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

