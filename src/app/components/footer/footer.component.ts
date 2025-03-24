import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-[#1e1938] text-white py-8">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between">
          <div class="mb-6 md:mb-0">
            <h3 class="text-xl font-bold text-[#fbcb4d] mb-4">MLBB GOGO</h3>
            <p class="text-[#C894FC] max-w-xs">
              Situs ini dibuat untuk komunitas Mobile Legends: Bang Bang, memberikan informasi tentang strategi, hero, dan sinergi dalam permainan.
            </p>
          </div>
          <div>
            <h4 class="font-medium text-[#fbcb4d] mb-4">Halaman</h4>
            <ul class="space-y-2">
              <li><a href="/" class="text-[#FCF3FE] hover:text-white transition">Beranda</a></li>
              <li><a href="/commander" class="text-[#FCF3FE] hover:text-white transition">Commander</a></li>
              <li><a href="/hero" class="text-[#FCF3FE] hover:text-white transition">Hero</a></li>
              <li><a href="/synergy" class="text-[#FCF3FE] hover:text-white transition">Sinergi</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-[#C894FC] mt-8 pt-6">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-sm text-[#C894FC] text-center md:text-left">
              Seluruh aset dan game adalah milik © Moonton. All rights reserved.
            </p>
            <div class="text-sm text-center md:text-right mt-4 md:mt-0">
              <p>Email: <a href="mailto:mobilechess.help@moonton.com" class="text-[#fbcb4d] hover:underline">{{emailName}}</a></p>
              <p>Website Resmi: <a href="https://play.mc-gogo.com/" target="_blank" class="text-[#fbcb4d] hover:underline">play.mc-gogo.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  emailName: string = 'mobilechess.help@moonton.com';
}