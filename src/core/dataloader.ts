export async function loadGameData() {
  const files = ["classes", "mobs"];
  const data: Record<string, any> = {};
  for (const f of files) {
    const res = await fetch(`/src/assets/data/${f}.json`);
    data[f] = await res.json();
  }
  console.log("Game Data Loaded:", data);
  return data;
}
