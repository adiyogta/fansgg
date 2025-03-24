export interface Synergy {
    id: number;
    name: string;
    description: string;
    heroes: number[]; // IDs of heroes in this synergy
    bonuses: Bonus[];
    // Add other properties as needed
  }
  // In models/synergy.model.ts
export interface Bonus {
    name: string;
    threshold: number;
    description: string;
    // other properties...
  }