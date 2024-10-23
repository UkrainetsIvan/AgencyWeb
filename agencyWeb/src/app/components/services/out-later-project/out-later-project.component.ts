import {NgClass, NgForOf, NgStyle} from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
gsap.registerPlugin(Draggable);

@Component({
  selector: 'app-out-later-project',
  templateUrl: './out-later-project.component.html',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    NgForOf
  ],
  styleUrls: ['./out-later-project.component.scss'] // Ensure this is the correct path
})
export class OutLaterProjectComponent {
  slides = [
    {
      image: "/img/discussions.png",
      title: "Lorem Ipsum is simply dummy text of the printing.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      image: "/img/writeCode.png",
      title: "Lorem Ipsum is simply dummy text of the printing.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu"
    },
    {
      image: "/img/watchProject.png",
      title: "Lorem Ipsum is simply dummy text of the printing.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem "
    },
    {
      image: "/img/wrtiteCodeInCafe.png",
      title: "Lorem Ipsum is simply dummy text of the printing.",
      description: "LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem "
    },
    {
      image: "/img/discussions.png",
      title: "Lorem Ipsum is simply dummy text of the printing.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      image: "/img/writeCode.png",
      title: "Lorem Ipsum is simply dummy text of the printing.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu"
    },
    {
      image: "/img/watchProject.png",
      title: "Lorem Ipsum is simply dummy text of the printing.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem "
    },
    {
      image: "/img/wrtiteCodeInCafe.png",
      title: "Lorem Ipsum is simply dummy text of the printing.",
      description: "LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem "
    },
    {
      image: "/img/discussions.png",
      title: "Lorem Ipsum is simply dummy text of the printing.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      image: "/img/writeCode.png",
      title: "Lorem Ipsum is simply dummy text of the printing.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu"
    },
    {
      image: "/img/watchProject.png",
      title: "Lorem Ipsum is simply dummy text of the printing.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem "
    },
    {
      image: "/img/wrtiteCodeInCafe.png",
      title: "Lorem Ipsum is simply dummy text of the printing.",
      description: "LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem "
    },
    {
      image: "/img/discussions.png",
      title: "Lorem Ipsum is simply dummy text of the printing.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      image: "/img/writeCode.png",
      title: "Lorem Ipsum is simply dummy text of the printing.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu"
    },
    {
      image: "/img/watchProject.png",
      title: "Lorem Ipsum is simply dummy text of the printing.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem "
    },
    {
      image: "/img/wrtiteCodeInCafe.png",
      title: "Lorem Ipsum is simply dummy text of the printing.",
      description: "LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem "
    },
  ];

  @ViewChild('dragContent', { static: true }) dragContent!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const draggableInstance = Draggable.create(this.dragContent.nativeElement, {
      type: 'x',
      bounds: this.dragContent.nativeElement,
      edgeResistance: 0.65,
      dragClickables: true,
      inertia: true
    });

    // Automatically scroll the slides
    this.autoScroll();
  }

  autoScroll() {
    const slidesWidth = this.dragContent.nativeElement.scrollWidth;
    const containerWidth = this.dragContent.nativeElement.clientWidth;
    const totalScrollDistance = slidesWidth - containerWidth;

    gsap.to(this.dragContent.nativeElement, {
      x: `-${totalScrollDistance}px`,
      duration: 25,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          const parsedX = parseFloat(x);
          const mod = totalScrollDistance + containerWidth;
          return parsedX % mod;
        })
      }
    });
  }

}
