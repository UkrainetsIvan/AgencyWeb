import { Component } from '@angular/core';
import {OffersComponent} from '../offers/offers.component';
import {ButtonBlueComponent} from '../../component/button-blue/button-blue.component';
import {ButtonWhiteComponent} from '../../component/button-white/button-white.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    ButtonBlueComponent,
    ButtonWhiteComponent,
    OffersComponent,
    ButtonBlueComponent,
    ButtonWhiteComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
    man:string = "/img/man.png";
    blue: string = "/img/blue.svg";
    turquoise: string = "/img/turquoise.svg";
    webSite: string = "/img/website.svg";
    seo: string = "/img/seo.svg";
    vr: string = "/img/vr.svg";
    mobile: string = "/img/mobile.svg";
}
