import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { Synergy } from '../../models/synergy.model';

@Component({
  selector: 'app-synergy-item',
  standalone: true,
  imports: [NgFor, CommonModule],
  template: `
    <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
      <div class="p-5 border-b border-gray-700">
        <h3 class="text-xl font-bold text-yellow-500 mb-2">{{ synergy.name }}</h3>
        <p class="text-gray-300 mb-4">{{ synergy.description }}</p>
        
        <div class="synergy-bonuses" *ngIf="synergy.bonuses && synergy.bonuses.length > 0">
    <h4>Bonuses</h4>
    <ul>
      <li *ngFor="let bonus of synergy.bonuses">
        <strong>{{ bonus.name }}:</strong> {{ bonus.description }}
      </li>
    </ul>
  </div>
      </div>
      
      <div class="p-5">
        <h4 class="text-white font-medium mb-3">Hero Members:</h4>
        <div class="grid grid-cols-4 gap-2">
        <div class="synergy-heroes" *ngIf="synergy.heroes && synergy.heroes.length > 0">
    <h4>Heroes</h4>
    <div class="hero-list">
      <!-- Use safe navigation operator -->
      <span *ngFor="let heroId of synergy.heroes">{{ heroId }}</span>
    </div>
  </div>
        </div>
      </div>
    </div>
  `
})
export class SynergyItemComponent {
  @Input() synergy!: Synergy;
  
  constructor(
    private dataService: DataService,
    private router: Router
  ) {}
  
  getHeroImage(heroId: number): string {
    const hero = this.dataService.getHeroById(heroId);
    return hero?.imageUrl || 'assets/images/placeholder.jpg';
  }
  
  getHeroName(heroId: number): string {
    const hero = this.dataService.getHeroById(heroId);
    return hero?.name || 'Unknown Hero';
  }
  
  navigateToHero(heroId: number): void {
    this.router.navigate(['/hero', heroId]);
  }
}