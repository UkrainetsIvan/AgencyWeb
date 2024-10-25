import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogComponent } from './blog.component'; // Ваш компонент
import { ActivatedRoute } from '@angular/router'; // Імпортуйте ActivatedRoute
import { of } from 'rxjs'; // Імпортуйте of з rxjs

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogComponent], // Використовуйте imports замість declarations
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
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Дозвольте Angular виконати початкові завдання
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Перевірте, чи компонент успішно створено
  });
});



