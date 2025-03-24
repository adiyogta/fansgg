import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HeroCardComponent } from '../../components/hero-card/hero-card.component';
import { DataService } from '../../services/data.service';
import { SeoService } from '../../services/seo.service';
import { AnimationService } from '../../services/animation.service';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    NgFor, 
    NgIf,
    ReactiveFormsModule, 
    HeroCardComponent
  ],
  template: `
    <div class="page-transition absolute top-0 left-0 w-full h-full bg-black transform scale-y-0 z-50"></div>
    
    <!-- Hero Banner -->
    <section class="relative py-20 bg-black">
      <div class="absolute inset-0 overflow-hidden">
        <img src="assets/images/hero-banner.jpg" alt="Heroes Banner" class="w-full h-full object-cover opacity-20">
      </div>
      <div class="relative container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          <span class="text-yellow-500">Hero</span> Database
        </h1>
        <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Temukan informasi lengkap mengenai seluruh hero dalam Mobile Legends: Bang Bang. Filter berdasarkan role, kesulitan, dan power.
        </p>
        
        <!-- Search and Filter -->
        <div class="max-w-3xl mx-auto bg-gray-800 p-4 rounded-lg">
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-1">
              <input 
                type="text" 
                [formControl]="searchControl"
                placeholder="Cari hero..." 
                class="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
            </div>
            <div class="flex-1">
              <select 
                [formControl]="roleFilter"
                class="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <option value="">Semua Role</option>
                <option value="Marksman">Marksman</option>
                <option value="Mage">Mage</option>
                <option value="Tank">Tank</option>
                <option value="Fighter">Fighter</option>
                <option value="Assassin">Assassin</option>
                <option value="Support">Support</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Heroes Grid -->
    <section class="py-16 bg-gray-900">
      <div class="container mx-auto px-6">
        <!-- Filter Tags -->
        <div class="flex flex-wrap gap-2 mb-6" *ngIf="activeFilters.length > 0">
          <div 
            *ngFor="let filter of activeFilters"
            class="px-3 py-1 bg-yellow-500 text-black rounded-full flex items-center text-sm">
            {{ filter }}
            <button 
              (click)="removeFilter(filter)"
              class="ml-2 rounded-full bg-black w-4 h-4 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          <button 
            (click)="clearFilters()"
            class="px-3 py-1 bg-red-500 text-white rounded-full flex items-center text-sm">
            Clear All
          </button>
        </div>
        
        <!-- Hero Count -->
        <p class="text-gray-400 mb-6">Showing {{ filteredHeroes.length }} heroes</p>
        
        <!-- Heroes Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 heroes-grid">
          <app-hero-card *ngFor="let hero of filteredHeroes" [hero]="hero"></app-hero-card>
        </div>
        
        <!-- No Results -->
        <div *ngIf="filteredHeroes.length === 0" class="text-center py-16">
          <p class="text-xl text-gray-400">No heroes found matching your criteria</p>
          <button 
            (click)="clearFilters()"
            class="mt-4 px-6 py-2 bg-yellow-500 text-black rounded-full">
            Clear Filters
          </button>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent implements OnInit {
  heroes: Hero[] = [];
  filteredHeroes: Hero[] = [];
  searchControl = new FormControl('');
  roleFilter = new FormControl('');
  activeFilters: string[] = [];

  constructor(
    private dataService: DataService,
    private seoService: SeoService,
    private animationService: AnimationService
  ) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags(
      'Heroes Database - Mobile Legends GOGO',
      'Browse and search all heroes in Mobile Legends: Bang Bang. Find stats, abilities, and synergies.'
    );
    
    this.dataService.heroes$.subscribe(heroes => {
      this.heroes = heroes;
      this.applyFilters();
    });
    
    // Set up search and filter listeners
    this.searchControl.valueChanges.subscribe(() => {
      this.applyFilters();
    });
    
    this.roleFilter.valueChanges.subscribe(role => {
      if (role && !this.activeFilters.includes(role)) {
        this.activeFilters.push(role);
      }
      this.applyFilters();
    });
    
    // Animations
    setTimeout(() => {
      this.animationService.animateHeroCards('.heroes-grid app-hero-card');
    }, 500);
  }
  
  applyFilters(): void {
    let filtered = [...this.heroes];
    
    // Apply search filter
    const searchTerm = this.searchControl.value?.toLowerCase();
    if (searchTerm) {
      filtered = filtered.filter(hero => 
        hero.name.toLowerCase().includes(searchTerm) || 
        hero.description.toLowerCase().includes(searchTerm)
      );
    }
    
    // Apply role filter
    if (this.activeFilters.length > 0) {
      filtered = filtered.filter(hero => 
        this.activeFilters.includes(hero.role)
      );
    }
    
    this.filteredHeroes = filtered;
  }
  
  removeFilter(filter: string): void {
    this.activeFilters = this.activeFilters.filter(f => f !== filter);
    
    // Reset role select if it matches the removed filter
    if (this.roleFilter.value === filter) {
      this.roleFilter.setValue('', { emitEvent: false });
    }
    
    this.applyFilters();
  }
  
  clearFilters(): void {
    this.activeFilters = [];
    this.searchControl.setValue('', { emitEvent: false });
    this.roleFilter.setValue('', { emitEvent: false });
    this.applyFilters();
  }
}