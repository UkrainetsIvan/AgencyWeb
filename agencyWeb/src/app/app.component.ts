import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavMenuComponent} from './components/nav-menu/nav-menu.component';
import {HeroComponent} from './components/hero/hero.component';
import {OffersComponent} from './components/offers/offers.component';
import {DummyComponent} from './components/dummy/dummy.component';
import {SimplyDummyComponent} from './components/simply-dummy/simply-dummy.component';
import {CompanyComponent} from './components/company/company.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavMenuComponent, HeroComponent, OffersComponent, DummyComponent, SimplyDummyComponent, CompanyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'agencyWeb';
}
