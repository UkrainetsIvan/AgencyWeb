import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HomeComponent} from './home.component';
import { ActivatedRoute } from '@angular/router'; // Імпортуйте ActivatedRoute
import { of } from 'rxjs'; // Імпортуйте of з rxjs

describe('AboutUsComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent], // Зміна з declarations на imports
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
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
