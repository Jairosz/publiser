import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-rotulaciones',
  templateUrl: './rotulaciones.component.html',
  styleUrls: ['./rotulaciones.component.css'],
  standalone: true
})
export class RotulacionesComponent implements AfterViewInit {

  ngAfterViewInit() {
    const track = document.querySelector('.carousel-track') as HTMLElement;
    const slides = Array.from(track.children) as HTMLElement[];
    const nextButton = document.querySelector('.next') as HTMLButtonElement;
    const prevButton = document.querySelector('.prev') as HTMLButtonElement;
    let currentIndex = 0;

    const updateSlides = () => {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      slides.forEach((slide, index) => {
        if (index === currentIndex) {
          slide.classList.add('current-slide');
        } else {
          slide.classList.remove('current-slide');
        }
      });
    };

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlides();
    });

    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlides();
    });

    updateSlides();
  }
}
