export interface Commander {
    id: number;
    name: string;
    imageUrl: string;
    abilities: Ability[];
    description: string;
  }
  
  export interface Ability {
    name: string;
    description: string;
    cooldown: number;
    iconUrl: string;
  }