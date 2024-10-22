import { Component } from '@angular/core';
import {NavMenuComponent} from '../home/nav-menu/nav-menu.component';
import {SimplyDummyComponent} from './simply-dummy/simply-dummy.component';
import {RouterOutlet} from '@angular/router';
import {SimplyDummyTextComponent} from './simply-dummy-text/simply-dummy-text.component';
import {OffersComponent} from './offers/offers.component';
import {FormComponent} from '../home/form/form.component';
import {FooterComponent} from '../home/footer/footer.component';
import {OurTeamComponent} from './our-team/our-team.component';
import {CommonModule} from '@angular/common';

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
    FooterComponent,
    OurTeamComponent,
    CommonModule
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
