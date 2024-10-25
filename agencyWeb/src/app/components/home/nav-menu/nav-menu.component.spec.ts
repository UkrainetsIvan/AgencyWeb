import { ComponentFixture, TestBed } from '@angular/core/testing';
import {NavMenuComponent} from './nav-menu.component';
import { ActivatedRoute } from '@angular/router'; // Імпортуйте ActivatedRoute
import { of } from 'rxjs'; // Імпортуйте of з rxjs

describe('AboutUsComponent', () => {
  let component: NavMenuComponent;
  let fixture: ComponentFixture<NavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMenuComponent], // Зміна з declarations на imports
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
    fixture = TestBed.createComponent(NavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
