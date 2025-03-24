import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  constructor() {}

  initGSAP(): void {
    gsap.registerPlugin(ScrollTrigger);
  }

  animateHeroCards(selector: string): void {
    gsap.from(selector, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: selector,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  }

  animateHeroEntrance(selector: string): void {
    gsap.fromTo(
      selector,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'back.out(1.7)'
      }
    );
  }

  animatePageTransition(): void {
    const tl = gsap.timeline();
    tl.to('.page-transition', { duration: 0.5, scaleY: 1, transformOrigin: 'top', ease: 'power2.inOut' })
      .to('.page-transition', { duration: 0.5, scaleY: 0, transformOrigin: 'bottom', ease: 'power2.inOut', delay: 0.1 });
  }
}