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
    this.meta.addTags([
      { name: 'description', content: 'Mobile Legends GOGO - Your ultimate guide to heroes, commanders, and synergies in Magic Chess GO GO' },
      { name: 'keywords', content: 'Mobile Legends, MLBB, GOGO, heroes, commanders, synergy, gaming, MOBA' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Mobile Legends GOGO' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'Mobile Legends GOGO' },
      { property: 'og:description', content: 'Your ultimate guide to Magic Chess Bang Bang' },
      { property: 'og:image', content: 'https://www.fansgame.site/' },
      { property: 'og:url', content: 'https://www.fansgame.site/' },
      { property: 'og:type', content: 'website' }
    ]);
  }
  generateStructuredData() {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Mobile Legends GOGO",
      "url": "https://fansgame.site/",
      "description": "Your ultimate guide to Magic Chess Bang Bang"
    });
    document.head.appendChild(script);
  }
  updateMetaTags(title: string, description: string): void {
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
  }
}