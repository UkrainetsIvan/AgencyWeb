import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
    facebook: string = "/img/facebook_icon.svg";
    instagram: string = "/img/instagram.svg";
    twitter: string = "/img/twitter.svg";
    linkedIn: string = "/img/linkedIn.svg";
}
