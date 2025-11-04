import type {
  CharacterClass,
  Skill,
  Mob,
  Boss,
  Item,
  Recipe,
  EnhanceTable,
} from "./type";

export interface GameData {
  classes: CharacterClass[];
  skills: Skill[];
  mobs: Mob[];
  bosses: Boss[];
  items: Item[];
  recipes: Recipe[];
  enhance: EnhanceTable;
}

export async function loadGameData(): Promise<GameData> {
  const files = [
    "classes",
    "skills",
    "mobs",
    "bosses",
    "items",
    "recipes",
    "enhance",
  ];
  const data: any = {};

  for (const name of files) {
    const res = await fetch(`/src/assets/data/${name}.json`);
    data[name] = await res.json();
  }

  console.log(
    `✅ 데이터 로드 완료: 직업 ${data.classes.length} / 몬스터 ${data.mobs.length} / 보스 ${data.bosses.length} / 아이템 ${data.items.length}`
  );

  return data as GameData;
}
