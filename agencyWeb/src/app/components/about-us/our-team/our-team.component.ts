import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [
    NgForOf
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

  get sliderTransform(): string {
    return `translateX(-${this.currentSlideIndex * 100}%)`;
  }

  setCurrentSlide(index: number): void {
    this.currentSlideIndex = index;
  }

  isActive(index: number): boolean {
    return this.currentSlideIndex === index;
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  previousSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }

}
