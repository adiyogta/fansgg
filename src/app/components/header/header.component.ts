import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="bg-[#1e1938] py-4 px-6 fixed w-full z-50">
      <div class="container mx-auto flex justify-between items-center">
        <a routerLink="/" class="text-2xl font-bold text-[#fbcb4d]">MLBB GOGO</a>
        
        <nav class="hidden md:block">
          <ul class="flex space-x-6">
            <li>
              <a routerLink="/" routerLinkActive="text-[#fbcb4d] border-b-2 border-[#fbcb4d]" [routerLinkActiveOptions]="{exact: true}"
                class="text-[#FCF3FE] hover:text-[#C894FC] transition pb-1">Beranda</a>
            </li>
            <li>
              <a routerLink="/commander" routerLinkActive="text-[#fbcb4d] border-b-2 border-[#fbcb4d]"
                class="text-[#FCF3FE] hover:text-[#C894FC] transition pb-1">Commander</a>
            </li>
            <li>
              <a routerLink="/hero" routerLinkActive="text-[#fbcb4d] border-b-2 border-[#fbcb4d]"
                class="text-[#FCF3FE] hover:text-[#C894FC] transition pb-1">Hero</a>
            </li>
            <li>
              <a routerLink="/synergy" routerLinkActive="text-[#fbcb4d] border-b-2 border-[#fbcb4d]"
                class="text-[#FCF3FE] hover:text-[#C894FC] transition pb-1">Sinergi</a>
            </li>
          </ul>
        </nav>
        
        <button class="md:hidden text-[#FCF3FE]" aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
    <!-- Mobile menu (hidden by default) -->
    <div class="md:hidden bg-[#7856e9] fixed w-full z-40 top-16 left-0 transform -translate-x-full transition-transform duration-300 ease-in-out">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a routerLink="/" class="block px-3 py-2 text-[#FCF3FE] hover:bg-[#C894FC] rounded-md">Beranda</a>
        <a routerLink="/commander" class="block px-3 py-2 text-[#FCF3FE] hover:bg-[#C894FC] rounded-md">Commander</a>
        <a routerLink="/hero" class="block px-3 py-2 text-[#FCF3FE] hover:bg-[#C894FC] rounded-md">Hero</a>
        <a routerLink="/synergy" class="block px-3 py-2 text-[#FCF3FE] hover:bg-[#C894FC] rounded-md">Sinergi</a>
      </div>
    </div>
    <div class="h-16"></div> <!-- Spacer for fixed header -->
  `
})
export class HeaderComponent {}
