import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consent-management',
  imports: [CommonModule,FormsModule],
  template: `
    <div *ngIf="showConsentPopup" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <h2 class="text-xl font-bold mb-4">Pengaturan Privasi</h2>
        <p class="mb-4">Kami menggunakan cookies untuk meningkatkan pengalaman pengguna dan analitik situs.</p>
        
        <div class="flex space-x-4">
          <button 
            (click)="acceptAllConsent()" 
            class="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Izinkan Semua
          </button>
          <button 
            (click)="rejectAllConsent()" 
            class="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Tolak
          </button>
        </div>
        
        <div class="mt-4">
          <button 
            (click)="openDetailedConsent()" 
            class="w-full text-blue-500 underline"
          >
            Kelola Pengaturan
          </button>
        </div>
      </div>
    </div>

    <div *ngIf="showDetailedConsent" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <h2 class="text-xl font-bold mb-4">Pengaturan Privasi Detail</h2>
        
        <div class="space-y-4">
          <div class="flex justify-between items-center">
            <label>Iklan Personalisasi</label>
            <input 
              type="checkbox" 
              [(ngModel)]="adConsent"
              class="form-checkbox"
            >
          </div>
          
          <div class="flex justify-between items-center">
            <label>Analitik</label>
            <input 
              type="checkbox" 
              [(ngModel)]="analyticsConsent"
              class="form-checkbox"
            >
          </div>
        </div>
        
        <div class="mt-6 flex space-x-4">
          <button 
            (click)="saveDetailedConsent()" 
            class="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Simpan Pengaturan
          </button>
          <button 
            (click)="closeDetailedConsent()" 
            class="flex-1 bg-gray-300 text-black py-2 rounded hover:bg-gray-400"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .form-checkbox {
      width: 20px;
      height: 20px;
    }
  `]
})
export class ConsentManagementComponent implements OnInit {
  showConsentPopup = true;
  showDetailedConsent = false;
  adConsent = false;
  analyticsConsent = false;

  ngOnInit() {
    this.initializeGoogleConsent();
    this.checkPreviousConsent();
  }

  initializeGoogleConsent() {
    // Inisialisasi Google Consent Mode default
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) { 
      (window as any).dataLayer.push(arguments); 
    }

    gtag('consent', 'default', {
      'ad_storage': 'denied',
      'analytics_storage': 'denied',
      'wait_for_update': 500
    });

    // Load Google Tag Manager
    const gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-6DWPZEQ79Q'; // Ganti dengan GA4 ID Anda
    document.head.appendChild(gtmScript);
  }

  checkPreviousConsent() {
    // Cek apakah pengguna sebelumnya sudah mengatur consent
    const hasSetConsent = localStorage.getItem('consent_set');
    if (hasSetConsent) {
      this.showConsentPopup = false;
    }
  }

  acceptAllConsent() {
    this.updateConsent(true, true);
    this.showConsentPopup = false;
  }

  rejectAllConsent() {
    this.updateConsent(false, false);
    this.showConsentPopup = false;
  }

  openDetailedConsent() {
    this.showDetailedConsent = true;
  }

  closeDetailedConsent() {
    this.showDetailedConsent = false;
  }

  saveDetailedConsent() {
    this.updateConsent(this.adConsent, this.analyticsConsent);
    this.showDetailedConsent = false;
    this.showConsentPopup = false;
  }

  updateConsent(adConsent: boolean, analyticsConsent: boolean) {
    const gtag = (window as any).gtag;
    
    gtag('consent', 'update', {
      'ad_storage': adConsent ? 'granted' : 'denied',
      'analytics_storage': analyticsConsent ? 'granted' : 'denied'
    });

    // Simpan status consent di localStorage
    localStorage.setItem('consent_set', 'true');
    localStorage.setItem('ad_consent', adConsent.toString());
    localStorage.setItem('analytics_consent', analyticsConsent.toString());
  }
}