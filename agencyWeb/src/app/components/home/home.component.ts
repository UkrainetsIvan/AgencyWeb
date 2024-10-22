import { Component } from '@angular/core';
import {CompanyComponent} from './company/company.component';
import {DummyComponent} from './dummy/dummy.component';
import {HeroComponent} from './hero/hero.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {OffersComponent} from './offers/offers.component';
import {SimplyDummyComponent} from './simply-dummy/simply-dummy.component';
import {FormComponent} from './form/form.component';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CompanyComponent,
    DummyComponent,
    HeroComponent,
    NavMenuComponent,
    OffersComponent,
    SimplyDummyComponent,
    FormComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
