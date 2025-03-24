import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { AnimationService } from '../../services/animation.service';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="hero-card">
  <div class="hero-image">
    <!-- Use proper image source -->
    <img [src]="hero.image || 'assets/images/default-hero.png'" [alt]="hero.name">
  </div>
  <div class="hero-info">
    <h3>{{ hero.name }}</h3>
    <!-- Fixed role issue -->
    <p class="hero-role" *ngIf="hero.role">{{ hero.role }}</p>
    <p class="hero-description" *ngIf="hero.description">{{ hero.description }}</p>
    
    <!-- Fixed stats issues with proper null checks -->
    <div class="hero-stats" *ngIf="hero.stats">
      <div class="stat">
        <span class="label">Attack:</span>
        <span class="value">{{ hero.stats.attack || 0 }}</span>
      </div>
      <div class="stat">
        <span class="label">Defense:</span>
        <span class="value">{{ hero.stats.defense || 0 }}</span>
      </div>
      <!-- Fix the incomplete expressions -->
      <div class="stat">
        <span class="label">Health:</span>
        <span class="value">{{ hero.stats.health || 0 }}</span>
      </div>
    </div>
    
    <!-- Fix abilities section -->
    <div class="hero-abilities" *ngIf="hero.abilities && hero.abilities.length > 0">
      <h4>Abilities</h4>
      <ul>
        <li *ngFor="let ability of hero.abilities">{{ ability }}</li>
      </ul>
    </div>
  </div>
</div>
  `
})
export class HeroCardComponent implements OnInit {
  @Input() hero!: Hero;

  constructor(
    private router: Router,
    private animationService: AnimationService
  ) {}

  ngOnInit(): void {
    // Individual card animations handled by container component
  }

  navigateToHeroDetail(): void {
    this.router.navigate(['/hero', this.hero.id]);
  }
}