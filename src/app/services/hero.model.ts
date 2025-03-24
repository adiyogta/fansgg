export interface Hero {
    id: number;
    name: string;
    role: string;
    imageUrl: string;
    skills: Skill[];
    stats: HeroStats;
    synergies: number[]; // IDs of synergistic heroes
    description: string;
  }
  
  export interface Skill {
    name: string;
    description: string;
    cooldown: number;
    iconUrl: string;
  }
  
  export interface HeroStats {
    hp: number;
    mana: number;
    attack: number;
    defense: number;
    speed: number;
  }