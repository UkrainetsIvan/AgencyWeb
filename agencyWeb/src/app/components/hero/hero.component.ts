import { Component } from '@angular/core';
import { ButtonBlueComponent } from '../button-blue/button-blue.component';
import {ButtonWhiteComponent} from '../button-white/button-white.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
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
}
