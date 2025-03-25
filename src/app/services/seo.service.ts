import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  initDefaultMeta(): void {
    this.title.setTitle('Mobile Legends GOGO - Your Ultimate Guide');
    
    this.meta.addTags([
      { name: 'description', content: 'Mobile Legends GOGO - Your ultimate guide to heroes, commanders, and synergies in Magic Chess GO GO' },
      { name: 'keywords', content: 'Mobile Legends, MLBB, GOGO, heroes, commanders, synergy, gaming, MOBA' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Mobile Legends GOGO' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'Mobile Legends GOGO' },
      { property: 'og:description', content: 'Your ultimate guide to Mobile Legends: Bang Bang' },
      { property: 'og:image', content: 'https://mcgogo.fansgame.site/path-to-logo.png' }, // Gunakan logo aktual
      { property: 'og:url', content: 'https://mcgogo.fansgame.site/' },
      { property: 'og:type', content: 'website' }
    ]);
  }

  // Tambahkan metode untuk structured data
  generateStructuredData() {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Mobile Legends GOGO",
      "url": "https://mcgogo.fansgame.site/",
      "description": "Your ultimate guide to Mobile Legends: Bang Bang"
    });
    document.head.appendChild(script);
  }
}