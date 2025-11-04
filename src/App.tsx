import { useEffect } from 'react';
import { loadGameData } from './core/dataloader';

export default function App() {
  useEffect(() => {
    loadGameData();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>AI MMORPG Prototype</h1>
      <p>데이터 로딩 중 콘솔을 확인하세요.</p>
    </div>
  );
}
