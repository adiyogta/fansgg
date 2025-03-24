import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from './hero.model';
import { Commander } from './commander.model';
import { Synergy } from './synergy.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private heroesData: Hero[] = [
    {
      id: 1,
      name: 'Miya',
      role: 'Marksman',
      imageUrl: 'assets/images/heroes/miya.jpg',
      skills: [
        {
          name: 'Moonlight Shower',
          description: 'Miya fires 7 arrows in a cone, each dealing 90 / 100 / 110 / 120 / 130 / 140 (+40% Total Physical Attack) Physical Damage.',
          cooldown: 5.5,
          iconUrl: 'assets/images/skills/miya-s1.jpg'
        },
        // More skills...
      ],
      stats: {
        hp: 2470,
        mana: 400,
        attack: 120,
        defense: 15,
        speed: 240
      },
      synergies: [3, 5],
      description: 'The Elven archer with lightning-fast attacks.'
    },
    // More heroes...
  ];

  private commandersData: Commander[] = [
    {
      id: 1,
      name: 'Dragon Tamer',
      imageUrl: 'assets/images/commanders/dragon-tamer.jpg',
      abilities: [
        {
          name: 'Dragons Fury',
          description: 'Increases attack damage by 15% for all allied heroes for 5 seconds.',
          cooldown: 30,
          iconUrl: 'assets/images/abilities/dragons-fury.jpg'
        },
        // More abilities...
      ],
      description: 'A powerful commander who can control dragons to aid in battle.'
    },
    // More commanders...
  ];

  private synergiesData: Synergy[] = [
    {
      id: 1,
      name: 'Elemental Synergy',
      description: 'Heroes with elemental powers combine their strengths.',
      heroes: [1, 4, 7, 9],
      bonuses: [
        {
          name:"AsapAction",
          threshold: 2,
          description: '+10% Magic Power'
        },
        {
          name:"AsapAction",
          threshold: 2,
          description: '+10% Magic Power'
        }
      ]
    },
    // More synergies...
  ];

  heroes$ = new BehaviorSubject<Hero[]>(this.heroesData);
  commanders$ = new BehaviorSubject<Commander[]>(this.commandersData);
  synergies$ = new BehaviorSubject<Synergy[]>(this.synergiesData);

  getHeroById(id: number): Hero | undefined {
    return this.heroesData.find(hero => hero.id === id);
  }

  getCommanderById(id: number): Commander | undefined {
    return this.commandersData.find(commander => commander.id === id);
  }

  getSynergyById(id: number): Synergy | undefined {
    return this.synergiesData.find(synergy => synergy.id === id);
  }
}