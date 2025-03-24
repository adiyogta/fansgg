import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { Commander } from '../../models/commander.model';

@Component({
  selector: 'app-commander-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="relative overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
      (click)="navigateToCommanderDetail()">
      <div class="relative h-56 overflow-hidden">
        <img 
          [src]="commander.image" 
          [alt]="commander.name"
          class="w-full h-full object-cover transform hover:scale-110 transition-all duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-4">
          <h3 class="text-xl font-bold text-white">{{ commander.name }}</h3>
        </div>
      </div>
      <div class="p-4 bg-gray-800">
        <div class="mb-3">
          <h4 class="text-yellow-500 font-semibold mb-1">Abilities</h4>
          <ul class="space-y-1">
            <li *ngFor="let ability of commander.abilities.slice(0, 2)" class="text-sm text-gray-300">
              {{ ability.name }}
            </li>
          </ul>
        </div>
        <p class="text-gray-300 text-sm line-clamp-2">{{ commander.description }}</p>
      </div>
    </div>
  `
})
export class CommanderCardComponent {
  @Input() commander!: Commander;

  constructor(private router: Router) {}

  navigateToCommanderDetail(): void {
    this.router.navigate(['/commander', this.commander.id]);
  }
}