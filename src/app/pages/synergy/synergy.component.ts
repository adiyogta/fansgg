import { Component, OnInit } from '@angular/core';
import { NgFor, AsyncPipe } from '@angular/common';
import { SynergyItemComponent } from '../../components/synergy-item/synergy-item.component';
import { DataService } from '../../services/data.service';
import { SeoService } from '../../services/seo.service';
import { AnimationService } from '../../services/animation.service';
import { Observable } from 'rxjs';// In any service using services/synergy.model
import { Synergy } from '../../models/synergy.model';


@Component({
  selector: 'app-synergy',
  standalone: true,
  imports: [NgFor, AsyncPipe, SynergyItemComponent],
  template: `
    <div class="page-transition absolute top-0 left-0 w-full h-full bg-black transform scale-y-0 z-50"></div>
    
    <!-- Synergy Page Banner -->
    <section class="relative py-20 bg-gray-900 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <img src="assets/images/synergy-banner.jpg" alt="Synergies Banner" class="w-full h-full object-cover opacity-20">
      </div>
      
      <div class="container mx-auto px-6 relative">
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            <span class="text-yellow-500">Sinergi</span> Hero
          </h1>
          <p class="text-gray-300 mb-8">
            Temukan kombinasi hero terbaik dan sinergi yang dapat membuat tim Anda tak terkalahkan di Land of Dawn.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Synergy Guide -->
    <section class="py-16 bg-black">
      <div class="container mx-auto px-6">
        <div class="bg-gray-800 p-8 rounded-lg shadow-lg mb-16">
          <h2 class="text-2xl font-bold text-yellow-500 mb-4">Memahami Sinergi Hero</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p class="text-gray-300 mb-4">
                Sinergi hero merupakan kombinasi karakter yang bekerja sangat baik bersama karena kemampuan yang saling melengkapi. Membangun tim dengan sinergi yang kuat dapat memberikan keuntungan signifikan dalam pertempuran.
              </p>
              <p class="text-gray-300">
                Setiap sinergi memiliki jumlah minimum hero yang diperlukan untuk mengaktifkan efek bonus. Semakin banyak hero dari sinergi yang sama, semakin kuat efek bonusnya.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-white mb-3">Manfaat Sinergi</h3>
              <ul class="list-disc list-inside text-gray-300 space-y-2">
                <li>Peningkatan statistik tim (HP, damage, cooldown reduction)</li>
                <li>Efek khusus (shield, crowd control, sustain)</li>
                <li>Counter terhadap komposisi tim tertentu</li>
                <li>Kemampuan tim fight yang lebih kuat</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 synergy-items">
          <app-synergy-item *ngFor="let synergy of synergies$ | async" [synergy]?="synergy"></app-synergy-item>
        </div>
      </div>
    </section>
  `
})
export class SynergyComponent implements OnInit {
  // Define the observable with the correct type
  synergies$: Observable<Synergy[]>;
  
  constructor(
    private dataService: DataService,
    private seoService: SeoService,
    private animationService: AnimationService
  ) {
    // Initialize in constructor to avoid "used before initialization" error
    this.synergies$ = this.dataService.synergies$;
  }
  
  ngOnInit(): void {
    this.seoService.updateMetaTags(
      'Synergy - Mobile Legends GOGO',
      'Temukan kombinasi hero terbaik dan sinergi yang dapat membuat tim Anda tak terkalahkan di Mobile Legends.'
    );
    
    // Initialize animations
    setTimeout(() => {
      this.animationService.animateHeroCards('.synergy-items');
    }, 500);
  }
}