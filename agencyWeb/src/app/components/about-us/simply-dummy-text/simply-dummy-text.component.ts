import { Component } from '@angular/core';

@Component({
  selector: 'app-simply-dummy-text',
  standalone: true,
  imports: [],
  templateUrl: './simply-dummy-text.component.html',
  styleUrl: './simply-dummy-text.component.scss'
})
export class SimplyDummyTextComponent {
  title: string = "Lorem Ipsum is simply dummy text of the printing.";
  description: string = "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. We build and develop mobile applications for several top platforms, including Android  & IOS. ";
}
