import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommanderCardComponent } from '../../components/commander-card/commander-card.component';
import { DataService } from '../../services/data.service';
import { SeoService } from '../../services/seo.service';
import { AnimationService } from '../../services/animation.service';
import { Commander } from '../../models/commander.model';

@Component({
  selector: 'app-commander',
  standalone: true,
  imports: [NgFor, CommanderCardComponent],
  template: `
    <div class="page-transition absolute top-0 left-0 w-full h-full bg-black transform scale-y-0 z-50"></div>
    
    <!-- Commander Banner -->
    <section class="relative py-20 bg-black">
      <div class="absolute inset-0 overflow-hidden">
        <img src="assets/images/commander-banner.jpg" alt="Commanders Banner" class="w-full h-full object-cover opacity-20">
      </div>
      <div class="relative container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          <span class="text-yellow-500">Commander</span> Database
        </h1>
        <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Temukan informasi lengkap mengenai seluruh commander dalam Mobile Legends: Bang Bang. Pelajari kemampuan dan strategi terbaik.
        </p>
      </div>
    </section>
    
    <!-- Commanders Grid -->
    <section class="py-16 bg-gray-900">
      <div class="container mx-auto px-6">        
        <!-- Commanders Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 commanders-grid">
          <app-commander-card *ngFor="let commander of commanders" [commander]="commander"></app-commander-card>
        </div>
      </div>
    </section>
  `
})
export class CommanderComponent implements OnInit {
  commanders: Commander[] = [];

  constructor(
    private dataService: DataService,
    private seoService: SeoService,
    private animationService: AnimationService
  ) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags(
      'Commanders Database - Mobile Legends GOGO',
      'Browse all commanders in Mobile Legends: Bang Bang. Find abilities and strategies.'
    );
    
    this.dataService.commanders$.subscribe(commanders => {
      this.commanders = commanders;
    });
    
    // Animations
    setTimeout(() => {
      this.animationService.animateHeroCards('.commanders-grid app-commander-card');
    }, 500);
  }
}
