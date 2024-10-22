import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavMenuComponent} from './components/home/nav-menu/nav-menu.component';
import {HeroComponent} from './components/home/hero/hero.component';
import {OffersComponent} from './components/home/offers/offers.component';
import {DummyComponent} from './components/home/dummy/dummy.component';
import {SimplyDummyComponent} from './components/home/simply-dummy/simply-dummy.component';
import {CompanyComponent} from './components/home/company/company.component';
import {HomeComponent} from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavMenuComponent, HeroComponent, OffersComponent, DummyComponent, SimplyDummyComponent, CompanyComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'agencyWeb';
}
