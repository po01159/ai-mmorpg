export interface CharacterClass {
  id: string;
  name: string;
  hp: number;
  atk: number;
  def: number;
  role: "tank" | "dps" | "healer";
}

export interface Skill {
  id: string;
  name: string;
  power: number;
  cool: number;
  role: "tank" | "dps" | "healer";
}

export interface Mob {
  id: string;
  hp: number;
  atk: number;
  exp: number;
  drops: [string, number][];
}

export interface Boss extends Mob {
  name: string;
  phases: { hpPct: number; pattern: string[] }[];
}

export interface Item {
  id: string;
  name: string;
  rarity: "common" | "uncommon" | "rare" | "epic";
}

export interface Recipe {
  out: string;
  mats: [string, number][];
  success: number;
}

export interface EnhanceTable {
  [key: string]: number | boolean;
  downOnFail: boolean;
  pityStep: number;
}
