// src/app/models/hero.model.ts
export interface Hero {
    id: number;
    name: string;
    image?: string;
    description: string;
    abilities?: string[];
    // Added missing properties based on errors
    role: string;
    stats: {
      attack?: number;
      defense?: number;
      health?: number;
      // Add other stats as needed
    };
    // Add other properties as needed
  }