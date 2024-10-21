import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavMenuComponent} from './components/nav-menu/nav-menu.component';
import {HeroComponent} from './components/hero/hero.component';
import {OffersComponent} from './components/offers/offers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavMenuComponent, HeroComponent, OffersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'agencyWeb';
}
