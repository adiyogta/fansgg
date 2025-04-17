import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgFor, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroCardComponent } from '../../components/hero-card/hero-card.component';
import { CommanderCardComponent } from '../../components/commander-card/commander-card.component';
import { SynergyItemComponent } from '../../components/synergy-item/synergy-item.component';
import { DataService } from '../../services/data.service';
import { SeoService } from '../../services/seo.service';
import { AnimationService } from '../../services/animation.service';
import { Commander } from '../../services/commander.model';
import { Hero } from '../../services/hero.model';
import { Synergy } from '../../services/synergy.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor,
    RouterLink, 
    HeroCardComponent, 
    CommanderCardComponent, 
    SynergyItemComponent
  ],
  template: `
    <div class="page-transition absolute top-0 left-0 w-full h-full bg-black transform scale-y-0 z-50"></div>
    
    <!-- Hero Section -->
    <section class="relative h-screen max-h-screen overflow-hidden">
      <div class="absolute inset-0">
      <img src="assets/images/banner.jpg" alt="Mobile Legends Banner" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>
      
      <div class="relative container mx-auto px-6 h-full flex items-center">
        <div class="max-w-2xl">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
            <span class="text-yellow-500">Mobile Legends</span> GOGO
          </h1>
          <p class="text-lg md:text-xl text-gray-300 mb-8">
            Panduan lengkap untuk strategi, hero, dan commander terbaik dalam Mobile Legends: Bang Bang. Tingkatkan permainanmu sekarang!
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a 
              routerLink="/hero" 
              class="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full transition-colors text-center">
              Lihat Hero
            </a>
            <a 
              routerLink="/commander" 
              class="px-8 py-3 bg-transparent hover:bg-white/10 text-white border-2 border-white rounded-full transition-colors text-center">
              Lihat Commander
            </a>
          </div>
        </div>
      </div>
      
      <div class="absolute bottom-8 left-0 right-0 flex justify-center">
        <div class="animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>

    <!-- AdSense Section -->
    <section class="py-6 bg-gray-800">
      <div class="container mx-auto px-6">
        <div id="adsense-container" class="w-full flex justify-center">
          <!-- AdSense will be inserted here via JavaScript -->
        </div>
      </div>
    </section>

    <!-- Featured Heroes Section -->
    <section class="py-16 bg-gray-900">
      <div class="container mx-auto px-6">
        <div class="flex justify-between items-center mb-10">
          <h2 class="text-3xl font-bold text-white">
            <span class="text-yellow-500">Hero</span> Populer
          </h2>
          <a routerLink="/hero" class="text-yellow-500 hover:text-yellow-400 flex items-center transition-colors">
            Lihat Semua
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 heroes-container">
          <app-hero-card *ngFor="let hero of featuredHeroes" [hero]="hero"></app-hero-card>
        </div>
      </div>
    </section>

    <!-- Featured Commanders Section -->
    <section class="py-16 bg-black">
      <div class="container mx-auto px-6">
        <div class="flex justify-between items-center mb-10">
          <h2 class="text-3xl font-bold text-white">
            <span class="text-yellow-500">Commander</span> Terbaik
          </h2>
          <a routerLink="/commander" class="text-yellow-500 hover:text-yellow-400 flex items-center transition-colors">
            Lihat Semua
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 commanders-container">
          <app-commander-card *ngFor="let commander of featuredCommanders" [commander]="commander"></app-commander-card>
        </div>
      </div>
    </section>

    <!-- Popular Synergies Section -->
    <section class="py-16 bg-gray-900">
      <div class="container mx-auto px-6">
        <div class="flex justify-between items-center mb-10">
          <h2 class="text-3xl font-bold text-white">
            <span class="text-yellow-500">Sinergi</span> Terpopuler
          </h2>
          <a routerLink="/synergy" class="text-yellow-500 hover:text-yellow-400 flex items-center transition-colors">
            Lihat Semua
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 synergies-container">
          <app-synergy-item *ngFor="let synergy of featuredSynergies" [synergy]="synergy"></app-synergy-item>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-yellow-500">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-black mb-6">
          Tingkatkan Skill Bermainmu Sekarang
        </h2>
        <p class="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
          Dapatkan panduan strategi terbaik, tier list hero terupdate, dan tips bermain dari profesional.
        </p>
        <a href="#" class="inline-block px-8 py-3 bg-black hover:bg-gray-800 text-white font-bold rounded-full transition-colors">
          Bergabung Dengan Komunitas GOGO
        </a>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
    
    .animate-bounce {
      animation: bounce 2s infinite;
    }
    
    @keyframes bounce {
      0%, 100% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      }
      50% {
        transform: translateY(0);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
    }
  `]
})
export class HomeComponent implements OnInit, AfterViewInit {
  featuredHeroes: Hero[] = [];
  featuredCommanders: Commander[] = [];
  featuredSynergies: Synergy[] = [];

  constructor(
    private dataService: DataService,
    private seoService: SeoService,
    private animationService: AnimationService
  ) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags(
      'Mobile Legends GOGO - Panduan Lengkap MLBB',
      'Panduan lengkap untuk strategi, hero, dan commander terbaik dalam Mobile Legends: Bang Bang. Tingkatkan permainanmu sekarang!'
    );
    
    // Get data
    this.dataService.heroes$.subscribe(heroes => {
      this.featuredHeroes = heroes.slice(0, 4);
    });
    
    this.dataService.commanders$.subscribe(commanders => {
      this.featuredCommanders = commanders.slice(0, 3);
    });
    
    this.dataService.synergies$.subscribe(synergies => {
      this.featuredSynergies = synergies.slice(0, 2);
    });
    
    // Animations
    setTimeout(() => {
      this.animationService.animateHeroCards('.heroes-container app-hero-card');
      this.animationService.animateHeroCards('.commanders-container app-commander-card');
      this.animationService.animateHeroCards('.synergies-container app-synergy-item');
    }, 500);
  }

  ngAfterViewInit(): void {
    // Load AdSense ads after view is initialized
    this.loadAdsenseAds();
    
    // Animations
    setTimeout(() => {
      this.animationService.animateHeroCards('.heroes-container app-hero-card');
      this.animationService.animateHeroCards('.commanders-container app-commander-card');
      this.animationService.animateHeroCards('.synergies-container app-synergy-item');
    }, 500);
  }

  loadAdsenseAds(): void {
    // Create ad container
    const adContainer = document.getElementById('adsense-container');
    if (!adContainer) return;

    // Create ins element
    const insElement = document.createElement('ins');
    insElement.className = 'adsbygoogle';
    insElement.style.display = 'block';
    insElement.setAttribute('data-ad-client', 'ca-pub-5083508606977693');
    insElement.setAttribute('data-ad-slot', '1986290072');
    insElement.setAttribute('data-ad-format', 'auto');
    insElement.setAttribute('data-full-width-responsive', 'true');
    
    // Append to container
    adContainer.appendChild(insElement);
    
    // Push ad
    try {
      // Fix: Properly declare adsbygoogle for TypeScript
      const adsbygoogle = (window as any).adsbygoogle || [];
      adsbygoogle.push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }
}