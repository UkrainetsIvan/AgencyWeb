import { Component } from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
  ],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.scss'
})
export class OurTeamComponent {
    slides = [
      {
        image: "/img/john.png",
        proffession: "CEO",
        name: "John kabras"
      },
      {
        image: "/img/philips.png",
        proffession: "COO",
        name: "Philips shene moris"
      },
      {
        image: "/img/equarn.png",
        proffession: "Tech lead",
        name: "Equarn shamir  mohomad"
      },
      {
        image: "/img/janka.png",
        proffession: "Head of UX",
        name: "Janka indrajith"
      },
    ]

  currentSlideIndex: number = 0;

  displayedSlides = [...this.slides, ...this.slides];

  get sliderTransform(): string {
    const slideWidth = 332 + 48; // Width + Margin
    return `translateX(-${this.currentSlideIndex * slideWidth}px)`;
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.displayedSlides.length;
  }

  previousSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.displayedSlides.length) % this.displayedSlides.length;
  }

}
