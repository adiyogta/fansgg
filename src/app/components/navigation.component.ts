import { Component, OnInit, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="bg-gray-800 py-4 fixed w-full top-0 z-50" [ngClass]="{'shadow-lg': scrolled}">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <a routerLink="/" class="text-2xl font-bold text-red-500">ML GOGO</a>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8">
          <a routerLink="/" class="text-white hover:text-red-400 transition-colors" routerLinkActive="text-red-400" [routerLinkActiveOptions]="{exact: true}">Beranda</a>
          <a routerLink="/commander" class="text-white hover:text-red-400 transition-colors" routerLinkActive="text-red-400">Commander</a>
          <a routerLink="/hero" class="text-white hover:text-red-400 transition-colors" routerLinkActive="text-red-400">Hero</a>
          <a routerLink="/synergy" class="text-white hover:text-red-400 transition-colors" routerLinkActive="text-red-400">Sinergi</a>
        </div>
        
        <!-- Mobile Menu Button -->
        <button class="md:hidden text-white" (click)="toggleMobileMenu()">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div *ngIf="mobileMenuOpen" class="md:hidden absolute w-full bg-gray-800 py-4" id="mobile-menu">
        <div class="flex flex-col space-y-4 px-4">
          <a routerLink="/" class="text-white hover:text-red-400 transition-colors" (click)="closeMobileMenu()">Beranda</a>
          <a routerLink="/commander" class="text-white hover:text-red-400 transition-colors" (click)="closeMobileMenu()">Commander</a>
          <a routerLink="/hero" class="text-white hover:text-red-400 transition-colors" (click)="closeMobileMenu()">Hero</a>
          <a routerLink="/synergy" class="text-white hover:text-red-400 transition-colors" (click)="closeMobileMenu()">Sinergi</a>
        </div>
      </div>
    </nav>
    <div class="h-16"></div> <!-- Spacer for fixed navbar -->
  `
})
export class NavigationComponent implements OnInit {
  mobileMenuOpen = false;
  scrolled = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;
  }

  ngOnInit() {
    gsap.from('nav', { y: -100, opacity: 0, duration: 0.8, ease: 'power2.out' });
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (this.mobileMenuOpen) {
      gsap.from('#mobile-menu', { height: 0, opacity: 0, duration: 0.3 });
    }
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}