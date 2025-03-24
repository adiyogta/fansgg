// src/app/models/commander.model.ts
export interface Commander {
    id: number;
    name: string;
    image?: string;
    description?: string;
    abilities: Ability[];
    // Add other properties as needed
  }
  
  export interface Ability {
    name: string;
    description: string;
    // Add other properties as needed
  }