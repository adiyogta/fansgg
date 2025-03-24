import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  private googleAdsLoaded = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  loadGoogleAdsScript() {
    if (isPlatformBrowser(this.platformId) && !this.googleAdsLoaded) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.async = true;
      script.setAttribute('data-ad-client', 'ca-pub-XXXXXXXXXXXXXXXX'); // Replace with your actual ad client ID
      document.head.appendChild(script);
      this.googleAdsLoaded = true;
    }
  }

  displayAd(adSlot: string) {
    if (isPlatformBrowser(this.platformId)) {
      // Implementation would depend on how you want to display ads
      console.log(`Displaying ad in slot: ${adSlot}`);
      
      // Example implementation using Google's recommended approach
      // This is simplified; actual implementation would need proper ad units configured
      (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
    }
  }
}
