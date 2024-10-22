import { Component } from '@angular/core';
import {NavMenuComponent} from '../home/nav-menu/nav-menu.component';
import {SimplyDummyComponent} from './simply-dummy/simply-dummy.component';
import {RouterOutlet} from '@angular/router';
import {SimplyDummyTextComponent} from './simply-dummy-text/simply-dummy-text.component';
import {OffersComponent} from './offers/offers.component';
import {FormComponent} from '../home/form/form.component';
import {FooterComponent} from '../home/footer/footer.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    NavMenuComponent,
    SimplyDummyComponent,
    RouterOutlet,
    SimplyDummyTextComponent,
    OffersComponent,
    FormComponent,
    FooterComponent
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
