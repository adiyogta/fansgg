import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SeoService } from './services/seo.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AnimationService } from './services/animation.service';
import { ConsentManagementComponent } from "./components/coockies.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(
    private animationService: AnimationService,
    private seoService: SeoService
  ) {}

  ngOnInit() {
    this.seoService.initDefaultMeta();
    this.seoService.generateStructuredData();
    this.animationService.initGSAP();
  }
}